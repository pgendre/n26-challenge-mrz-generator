const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../../services/string')

const { checkDigitCalculation } = require('../../services/check-digit')

const lineLength = 30

const generateLine1 = ({ passport, user }) => {
  let line = generateEmptyLine(lineLength)
  line = _generatePassportType(line, passport)
  line = _generateIssuingCountry(line, passport)

  return line
}

const _generatePassportType = (line, passport) => {
  line = replaceSubStringAtPositionToUpCase(line, passport.type, 0)
  if (passport.precisionType) {
    line = replaceSubStringAtPositionToUpCase(line, passport.precisionType, 1)
  }
  return line
}

const _generateIssuingCountry = (line, passport) =>
  replaceSubStringAtPositionToUpCase(line, passport.issuingCountry, 2)

module.exports = { generateLine1 }
