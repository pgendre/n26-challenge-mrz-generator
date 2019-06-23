const checkDigitCalculation = inputString => {
  if (!_doesStringFitToFormat(inputString))
    throw new Error('Check Digit : Input string does not match required format')
  const arrayOfChars = _stringIntoArrayOfChars(inputString)
  const arrayOfNumbers = _arrayOfCharIntoArrayOfNumber(arrayOfChars)
  const weightedSum = _computeWeightedSum(arrayOfNumbers)
  return String(weightedSum % 10)
}

// Formatting / mapping --
// Example of mathing string: 'EREFGRE45<<<<ER'
const _doesStringFitToFormat = inputString =>
  new RegExp(/^([A-Z]|[0-9]|<)*$/g).test(inputString)

const _stringIntoArrayOfChars = str => str.split('')

const _arrayOfCharIntoArrayOfNumber = arr =>
  arr.map(chr =>
    _isCharANumber(chr) ? Number(chr) : _convertCharIntoNumber(chr)
  )

const _convertCharIntoNumber = chr => (chr === '<' ? 0 : chr.charCodeAt(0) - 55)

const _isCharANumber = chr => Number(chr) == chr

// Calculation --
const _computeWeightedSum = arrayOfNumbers => {
  let result = 0
  const weights = [7, 3, 1]
  arrayOfNumbers.forEach((value, i) => {
    result += weights[i % 3] * value
  })
  return result
}

module.exports = { checkDigitCalculation }
