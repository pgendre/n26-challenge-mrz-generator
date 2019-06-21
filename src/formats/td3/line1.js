const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../../services/string')

const { checkDigitCalculation } = require('../../services/check-digit')

const lineLength = 44

const generateLine1 = ({ passport, user }) => {
  let line1 = generateEmptyLine(lineLength)

  line1 = _generatePassportType(line1, passport)
  line1 = _generateIssuingCountry(line1, passport)
  line1 = _generateSurname(line1, user)
  line1 = _generateGivenNames(line1, user)

  return line1
}

const _generatePassportType = (line1, passport) => {
  line1 = replaceSubStringAtPositionToUpCase(line1, passport.type, 0)
  if (passport.precisionType) {
    line1 = replaceSubStringAtPositionToUpCase(line1, passport.precisionType, 1)
  }
  return line1
}

const _generateIssuingCountry = (line1, passport) =>
  replaceSubStringAtPositionToUpCase(line1, passport.issuingCountry, 2)

const _generateSurname = (line1, user) => {
  const surname = replaceSpecialCharsBySpaces(user.surname)
  return replaceSubStringAtPositionToUpCase(line1, surname, 5)
}

const _generateGivenNames = (line1, user) => {
  const givenNamesPosition = 5 + user.surname.length + 2
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

module.exports = { generateLine1 }
