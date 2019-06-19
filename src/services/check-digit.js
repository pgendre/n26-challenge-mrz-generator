const checkDigitCalculation = inputString => {
  if (!_doesStringFitToFormat(inputString))
    throw new Error('Check Digit : Input string does not match required format')
}

const _doesStringFitToFormat = inputString =>
  /^([A-Z]|[0-9]|<)+$/g.test(inputString)

const _stringIntoArrayOfChar = str => str.split('')

const _arrayOfCharIntoArrayOfNumber = arr =>
  arr.map(chr => (_isCharANumber(chr) ? chr : _convertCharIntoNumber(chr)))

const _convertCharIntoNumber = chr => chr.charCodeAt(0) - 97

const _isCharANumber = c => Number(c) == c
