const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../services/string')

const { checkDigitCalculation } = require('../services/check-digit')

const {
  generatePassportType,
  generateIssuingCountry,
  generatePassportNumber,
  generateSex,
  generateCountryCode
} = require('./common')

const lineLength = 30

const generateLine1 = ({ passport, user }) => {
  let line = generateEmptyLine(lineLength)
  line = generatePassportType(line, passport)
  line = generateIssuingCountry(line, passport)
  line = generatePassportNumber(line, passport, 5)
  line = _generateOptionalField(line, passport.optionalField1, 15, 15)
  return line
}

const generateLine2 = ({ passport, user }) => {
  let line = generateEmptyLine(lineLength)
  line = generateDateWithCheckDigit(line, user.dateOfBirth, 0)
  line = generateSex(line, user, 7)
  line = generateDateWithCheckDigit(line, passport.expirationDate, 8)
  line = generateCountryCode(line, user.nationality, 15)
  line = _generateOptionalField(line, passport.optionalField2, 18, 11)
  return line
}

const generateLine3 = ({ passport, user }) => {
  let line = generateEmptyLine(lineLength)
  line = generateDateWithCheckDigit(line, user.dateOfBirth, 0)
  line = generateSex(line, user, 7)
  line = generateDateWithCheckDigit(line, passport.expirationDate, 8)
  line = generateCountryCode(line, user.nationality, 15)
  line = _generateOptionalField(line, passport.optionalField2, 18, 11)
  return line
}
const _generateOptionalField = (line, value, position, maxLength) => {
  let field = truncateString(value.toUpperCase(), maxLength)
  field = replaceSpecialCharsBySpaces(field)
  return replaceSubStringAtPositionToUpCase(line, field, position)
}

module.exports = { generateLine1 }
