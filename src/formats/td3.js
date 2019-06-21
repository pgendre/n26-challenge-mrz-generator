const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../services/strings')

const generateTd3Mrz = data => {}

const _generateLine1 = ({ passport, user }) => {
  const lineLength = 44

  let line1 = generateEmptyLine(lineLength)

  line1 = replaceSubStringAtPositionToUpCase(line1, passport.type, 0)
  if (passport.precisionType)
    line1 = replaceSubStringAtPositionToUpCase(line1, passport.precisionType, 1)

  line1 = replaceSubStringAtPositionToUpCase(line1, passport.issuingCountry, 2)

  const surname = replaceSpecialCharsBySpaces(user.surname)
  line1 = replaceSubStringAtPositionToUpCase(line1, surname, 5)

  const givenNamesPosition = 5 + surname.length + 2
  const givenNamesMaxLength = lineLength - givenNamesPosition
  const givenNames = truncateString(
    replaceSpecialCharsBySpaces(user.givenNames)
  )
  line1 = replaceSubStringAtPositionToUpCase(
    line1,
    givenNames,
    givenNamesPosition
  )
  return line1
  console.log('LINE 1 =', line1)
}

module.exports = { generateTd3Mrz }
