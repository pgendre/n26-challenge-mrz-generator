const { generateEmptyLine } = require('../../services/string')

const { checkDigitCalculation } = require('../../services/check-digit')

const {
  generatePassportType,
  generateCountryCode,
  generateSurnameAndGivenNames
} = require('../common')

const lineLength = 44

const generateLine1 = ({ passport, user }) => {
  let line = generateEmptyLine(lineLength)
  line = generatePassportType(line, passport)
  line = generateCountryCode(line, passport.issuingCountry, 2)
  line = generateSurnameAndGivenNames(line, user, 5, lineLength)
  return line
}

module.exports = { generateLine1 }
