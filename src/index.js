const {transformModulePath} = require('module-path-codemod')

module.exports = function (fileInfo, api) {
  return transformModulePath(api.jscodeshift(fileInfo.source), module =>
    module.replace(/^material-ui\//, '@material-ui/core/')
  ).toSource()
}
