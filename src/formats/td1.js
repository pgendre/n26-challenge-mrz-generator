const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../services/string')

const {
  generatePassportType,
  generatePassportNumber,
  generateSex,
  generateCountryCode,
  generateDateWithCheckDigit,
  generateSurnameAndGivenNames
} = require('./common')

const lineLength = 30

const generateMrzTd1 = data =>
  `${_generateLine1(data)}\n${_generateLine2(data)}\n${_generateLine3(data)}`

const _generateLine1 = ({ passport }) => {
  let line = generateEmptyLine(lineLength)
  line = generatePassportType(line, passport)
  line = generateCountryCode(line, passport.issuingCountry, 2)
  line = generatePassportNumber(line, passport, 5)
  line = _generateOptionalField(line, passport.optionalField1, 15, 15)
  return line
}

const _generateLine2 = ({ passport, user }) => {
  let line = generateEmptyLine(lineLength)
  line = generateDateWithCheckDigit(line, user.dateOfBirth, 0)
  line = generateSex(line, user, 7)
  line = generateDateWithCheckDigit(line, passport.expirationDate, 8)
  line = generateCountryCode(line, user.nationality, 15)
  line = _generateOptionalField(line, passport.optionalField2, 18, 11)
  return line
}

const _generateLine3 = ({ user }) => {
  let line = generateEmptyLine(lineLength)
  return generateSurnameAndGivenNames(line, user, 0, lineLength)
}

const _generateOptionalField = (line, value, position, maxLength) => {
  let field = truncateString(value.toUpperCase(), maxLength)
  field = replaceSpecialCharsBySpaces(field)
  return replaceSubStringAtPositionToUpCase(line, field, position)
}

module.exports = { generateMrzTd1 }
