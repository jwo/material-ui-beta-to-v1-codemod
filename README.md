# material-ui-beta-to-v1-codemod

[![Build Status](https://travis-ci.org/jcoreio/material-ui-beta-to-v1-codemod.svg?branch=master)](https://travis-ci.org/jcoreio/material-ui-beta-to-v1-codemod)
[![Coverage Status](https://codecov.io/gh/jcoreio/material-ui-beta-to-v1-codemod/branch/master/graph/badge.svg)](https://codecov.io/gh/jcoreio/material-ui-beta-to-v1-codemod)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

jscodeshift codemod to upgrade material-ui package paths from beta to v1

## Setup & Run

1. `yarn global add jscodeshift`
2. `git clone https://github.com/jcoreio/material-ui-beta-to-v1-codemod.git`
3. Run `yarn install` in the `material-ui-beta-to-v1-codemod` directory
4. `jscodeshift -t material-ui-beta-to-v1-codemod/lib/index.js <path>`
  * `path` - files or directory to transform
  * use the `-d` option for a dry-run and use `-p` to print the output for comparison
  * use the `--extensions` option if your files have different extensions than `.js` (for example, `--extensions js,jsx`)
  * if you use flowtype, you might also need to use `--parser=flow`
