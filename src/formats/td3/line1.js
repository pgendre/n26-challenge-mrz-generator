const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../../services/string')

const { checkDigitCalculation } = require('../../services/check-digit')

const { generatePassportType, generateIssuingCountry } = require('../common')

const lineLength = 44

const generateLine1 = ({ passport, user }) => {
  let line = generateEmptyLine(lineLength)

  line = generatePassportType(line, passport)
  line = generateIssuingCountry(line, passport)
  line = _generateSurname(line, user)
  line = _generateGivenNames(line, user)

  return line
}

const _generateSurname = (line, user) => {
  const surname = replaceSpecialCharsBySpaces(user.surname)
  return replaceSubStringAtPositionToUpCase(line, surname, 5)
}

const _generateGivenNames = (line, user) => {
  const givenNamesPosition = 5 + user.surname.length + 2
  const givenNamesMaxLength = lineLength - givenNamesPosition

  const givenNames = truncateString(
    replaceSpecialCharsBySpaces(user.givenNames),
    givenNamesMaxLength
  )
  return replaceSubStringAtPositionToUpCase(
    line,
    givenNames,
    givenNamesPosition
  )
}

module.exports = { generateLine1 }
