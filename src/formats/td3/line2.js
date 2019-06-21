const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../../services/string')

const { checkDigitCalculation } = require('../../services/check-digit')

const { generateDateWithCheckDigit } = require('../common')

const lineLength = 44

const generateLine2 = ({ passport, user }) => {
  let line2 = generateEmptyLine(lineLength)
  line2 = _generatePassportNumber(line2, passport)
  line2 = _generateUserNationality(line2, user)
  line2 = _generateDateOfBirth(line2, user)
  line2 = _generateSex(line2, user)
  line2 = _generateExpirationDate(line2, passport)
  console.log('LINE 2 ==================', line2)
}

const _generatePassportNumber = (line2, passport) => {
  line2 = replaceSubStringAtPositionToUpCase(line2, passport.number, 0)
  const digitCheck = checkDigitCalculation(passport.number.toUpperCase())
  return replaceSubStringAtPositionToUpCase(line2, digitCheck, 9)
}

const _generateUserNationality = (line2, user) =>
  replaceSubStringAtPositionToUpCase(line2, user.nationality, 10)

const _generateDateOfBirth = (line2, user) =>
  generateDateWithCheckDigit(line2, user.dateOfBirth, 13)

const _generateSex = (line2, user) =>
  replaceSubStringAtPositionToUpCase(line2, user.sex[0].toUpperCase(), 20)

const _generateExpirationDate = (line2, passport) =>
  generateDateWithCheckDigit(line2, passport.expirationDate, 21)

module.exports = { generateLine2 }
