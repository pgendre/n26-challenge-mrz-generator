const {
  checkInputFormat,
  setDefaultValueToUndefinedFields
} = require('src/services/checkInputFormat')

const { generateMrzTd1 } = require('./formats/td1')
const { generateMrzTd3 } = require('./formats/td3')

const generateMrz = data => {
  checkInputFormat(data)
  setDefaultValueToUndefinedFields(data)
  switch (data.passport.mrzType) {
    case 'td1':
      return generateMrzTd1(data)
    case 'td3':
      return generateMrzTd3(data)
    default:
      return generateMrzTd3(data)
  }
}
