const { checkInputFormat } = require('./src/services/check-input-format')

const { generateMrzTd1 } = require('./src/formats/td1')
const { generateMrzTd3 } = require('./src/formats/td3')

const generateMrz = data => {
  checkInputFormat(data)
  switch (data.passport.mrzType) {
    case 'td1':
      return generateMrzTd1(data)
    case 'td3':
      return generateMrzTd3(data)
    default:
      return generateMrzTd3(data)
  }
}

module.exports = { generateMrz }
