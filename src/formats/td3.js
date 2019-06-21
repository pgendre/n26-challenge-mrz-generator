const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../services/string')

const { checkDigitCalculation } = require('../services/check-digit')
const lineLength = 44

const generateTd3Mrz = data => {}

const _generateLine1 = ({ passport, user }) => {
  let line1 = generateEmptyLine(lineLength)

  line1 = _generatePassportType(line1, passport)
  line1 = _generateIssuingCountry(line1, passport)
  line1 = _generateSurname(line1, user)
  line1 = _generateGivenNames(line1, user, surname)

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

const _generateLine2 = ({ passport, user }) => {
  let line2 = generateEmptyLine(lineLength)
  line2 = _generatePassportNumber(line2, passport)
  line2 = _generateUserNationality(line2, user)
  console.log('LINE 2 ==================', line2)
}

const _generatePassportNumber = (line2, passport) => {
  line2 = replaceSubStringAtPositionToUpCase(line2, passport.number, 0)
  let digitCheck = checkDigitCalculation(passport.number.toUpperCase())
  return replaceSubStringAtPositionToUpCase(line2, digitCheck, 9)
}
const _generateUserNationality = (line2, user) =>
  replaceSubStringAtPositionToUpCase(line2, user.nationality, 10)

module.exports = { generateTd3Mrz }
