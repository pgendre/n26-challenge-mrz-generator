const {
  checkInputFormat,
  setDefaultValueToUndefinedFields
} = require('src/services/checkInputFormat')

const generateMrz = data => {
  checkInputFormat(data)
  setDefaultValueToUndefinedFields(data)
}
