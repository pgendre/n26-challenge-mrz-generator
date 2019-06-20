const rewire = require('rewire')
const service = rewire('../../src/services/check-input-format')
const {
  checkDigitCalculation
} = require('../../src/services/check-input-format')

const _isDateFormatValid = service.__get__('_isDateFormatValid')
const _isNameFormatValid = service.__get__('_isNameFormatValid')
const _isCountryCodeValid = service.__get__('_isCountryCodeValid')

test('SERVICES CHECK INPUT FORMAT 01: Should detect a corrupted date', () => {
  const result = _isDateFormatValid('1920-04-45')
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 02: Should detect a valid date', () => {
  const result = _isDateFormatValid('04 Dec 1995 00:12:00 GMT')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 03: Should detect a valid name', () => {
  const result = _isNameFormatValid("Darth des Vaille d'Orthus-Mer")
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 04: Should detect a corrupted name', () => {
  const result = _isNameFormatValid("Darth des Vaille d''Orthus-Mer")
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 05: Should detect a valid country code', () => {
  const result = _isCountryCodeValid('FIN')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 06: Should detect a corrupted country code', () => {
  const result = _isCountryCodeValid('F@N')
  expect(result).toBe(false)
})
