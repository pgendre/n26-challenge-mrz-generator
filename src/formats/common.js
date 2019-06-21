const { replaceSubStringAtPositionToUpCase } = require('../services/string')
const { checkDigitCalculation } = require('../services/check-digit')
const { stringDateToYYMMDD } = require('../services/date')

const generateDateWithCheckDigit = (line, stringDate, position) => {
  const formatYYMMDD = stringDateToYYMMDD(stringDate)
  line = replaceSubStringAtPositionToUpCase(line, formatYYMMDD, position)
  const digitCheck = checkDigitCalculation(formatYYMMDD)
  return replaceSubStringAtPositionToUpCase(line, digitCheck, position + 6)
}

const generatePassportNumber = (line, passport, position) => {
  line = replaceSubStringAtPositionToUpCase(line, passport.number, position)
  const digitCheck = checkDigitCalculation(passport.number.toUpperCase())
  return replaceSubStringAtPositionToUpCase(line, digitCheck, position + 9)
}

const generatePassportType = (line, passport) => {
  line = replaceSubStringAtPositionToUpCase(line, passport.type, 0)
  if (passport.precisionType) {
    line = replaceSubStringAtPositionToUpCase(line, passport.precisionType, 1)
  }
  return line
}

const generateIssuingCountry = (line, passport) =>
  replaceSubStringAtPositionToUpCase(line, passport.issuingCountry, 2)

module.exports = {
  generateDateWithCheckDigit,
  generatePassportNumber,
  generatePassportType,
  generateIssuingCountry
}
