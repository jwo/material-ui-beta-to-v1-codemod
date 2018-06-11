// @flow

import path from 'path'
import {describe, it} from 'mocha'
import {expect} from 'chai'

import fs from 'fs-extra'
import {spawn} from 'promisify-child-process'

describe('codemod', () => {
  it('works', async function (): Promise<void> {
    this.timeout(60000)

    const code = `
import Button from 'material-ui/Button'
import List from 'material-ui/List'
const {withStyles} = require('material-ui/styles')
const untouched = 'material-ui/Blah'
`

    const file = 'temp.js'

    try {
      await fs.writeFile(file, code, 'utf8')

      await spawn('jscodeshift', [
        '-t', 'src/index.js', file,
      ], {cwd: path.resolve(__dirname, '..'), stdio: 'inherit'})

      const actual = await fs.readFile(file, 'utf8')

      const expected = `
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
const {withStyles} = require("@material-ui/core/styles")
const untouched = 'material-ui/Blah'
`
      expect(actual).to.equal(expected)
    } finally {
      await fs.remove(file)
    }
  })
})
