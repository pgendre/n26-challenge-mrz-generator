const rewire = require('rewire')
const service = rewire('../../src/services/check-digit')

const _doesStringFitToFormat = service.__get__('_doesStringFitToFormat')
const _arrayOfCharIntoArrayOfNumber = service.__get__(
  '_arrayOfCharIntoArrayOfNumber'
)

test('SERVICES CHECK DIGIT 01: Should identify a string matching the expected format', () => {
  const result = _doesStringFitToFormat('ERT43443<<43334<3')
  expect(result).toBe(true)
})

test('SERVICES CHECK DIGIT 02: Should identify a string NOT matching the expected format (case 1)', () => {
  const result = _doesStringFitToFormat('ERT4344@<43334<3')
  expect(result).toBe(false)
})

test('SERVICES CHECK DIGIT 03: Should identify a string NOT matching the expected format (case 2)', () => {
  const result = _doesStringFitToFormat('ERT4344:<43334<3')
  expect(result).toBe(false)
})

test('SERVICES CHECK DIGIT 04: Should identify a string NOT matching the expected format (case 3)', () => {
  const result = _doesStringFitToFormat('EaRT4344<43334<3')
  expect(result).toBe(false)
})

test('SERVICES CHECK DIGIT 05: Should transform an array of characters into an \
  array of number (letter converted into associated code) ', () => {
  const arrayOfChars = ['1', '<', '7', 'A', 'B', '9', 'W']
  const result = _arrayOfCharIntoArrayOfNumber(arrayOfChars)
  expect(JSON.stringify(result)).toBe(JSON.stringify([1, 0, 7, 10, 11, 9, 32]))
})
