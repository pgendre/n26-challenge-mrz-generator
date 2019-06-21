const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../../services/string')

const { checkDigitCalculation } = require('../../services/check-digit')

const {
  generatePassportType,
  generateIssuingCountry,
  generatePassportNumber
} = require('../common')

const lineLength = 30

const generateLine1 = ({ passport, user }) => {
  let line = generateEmptyLine(lineLength)
  line = generatePassportType(line, passport)
  line = generateIssuingCountry(line, passport)
  line = generatePassportNumber(line, passport, 5)
  line = _generateOptionalField(line, passport)
  console.log('LINE ===============', line)
  return line
}

const _generateOptionalField = (line, passport) => {
  let field = truncateString(passport.optionalField1.toUpperCase(), 15)
  field = replaceSpecialCharsBySpaces(field)
  return replaceSubStringAtPositionToUpCase(line, field, 15)
}

module.exports = { generateLine1 }
