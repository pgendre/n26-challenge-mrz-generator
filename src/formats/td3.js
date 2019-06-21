const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../services/strings')

const lineLength = 44

const generateTd3Mrz = data => {}

const _generateLine1 = ({ passport, user }) => {
  let line1 = generateEmptyLine(lineLength)

  line1 = replaceSubStringAtPositionToUpCase(line1, passport.type, 0)
  if (passport.precisionType)
    line1 = replaceSubStringAtPositionToUpCase(line1, passport.precisionType, 1)

  line1 = replaceSubStringAtPositionToUpCase(line1, passport.issuingCountry, 2)

  const surname = replaceSpecialCharsBySpaces(user.surname)
  line1 = replaceSubStringAtPositionToUpCase(line1, surname, 5)
  line1 = _generateGivenNames(line1, user, surname)
  return line1
}

const _generateGivenNames = (line1, user, surname) => {
  const givenNamesPosition = 5 + surname.length + 2
  const givenNamesMaxLength = lineLength - givenNamesPosition

  const givenNames = truncateString(
    replaceSpecialCharsBySpaces(user.givenNames),
    givenNamesMaxLength
  )
  return replaceSubStringAtPositionToUpCase(
    line1,
    givenNames,
    givenNamesPosition
  )
}

module.exports = { generateTd3Mrz }
