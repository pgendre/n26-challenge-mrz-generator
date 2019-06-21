const { replaceSubStringAtPositionToUpCase } = require('../services/string')
const { checkDigitCalculation } = require('../services/check-digit')
const { stringDateToYYMMDD } = require('../services/date')

const generateDateWithCheckDigit = (line, stringDate, position) => {
  const formatYYMMDD = stringDateToYYMMDD(stringDate)
  line = replaceSubStringAtPositionToUpCase(line, formatYYMMDD, position)
  const digitCheck = checkDigitCalculation(formatYYMMDD)
  return replaceSubStringAtPositionToUpCase(line, digitCheck, position + 6)
}

module.exports = { generateDateWithCheckDigit }
