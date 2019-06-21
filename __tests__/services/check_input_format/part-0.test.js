const rewire = require('rewire')
const service = rewire('../../../src/services/check-input-format')

const _isDateFormatValid = service.__get__('_isDateFormatValid')
const _isNameFormatValid = service.__get__('_isNameFormatValid')
const _isCountryCodeValid = service.__get__('_isCountryCodeValid')
const _isMrzTypeValid = service.__get__('_isMrzTypeValid')
const _isALetter = service.__get__('_isALetter')
const _isAValidPrecisionOfType = service.__get__('_isAValidPrecisionOfType')

test('SERVICES CHECK INPUT FORMAT 01: Should detect a valid date', () => {
  const result = _isDateFormatValid('04 Dec 1995 00:12:00 GMT')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 02: Should detect a corrupted date (1)', () => {
  const result = _isDateFormatValid('1920-04-45')
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 03: Should detect a corrupted date (2)', () => {
  const result = _isDateFormatValid()
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 04: Should detect a valid name', () => {
  const result = _isNameFormatValid("Darth des Vaille d'Orthus-Mer")
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 05: Should detect a corrupted name', () => {
  const result = _isNameFormatValid("Darth des Vaille d''Orthus-Mer")
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 06: Should detect a valid country code', () => {
  const result = _isCountryCodeValid('FIN')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 07: Should detect a corrupted country code', () => {
  const result = _isCountryCodeValid('F@N')
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 08: Should detect a valid MRZ type', () => {
  const result = _isMrzTypeValid('td1')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 09: Should detect a corrupted MRZ type', () => {
  const result = _isMrzTypeValid('td2')
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 10: Should detect a letter (case 1)', () => {
  const result = _isALetter('a')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 11: Should detect a letter (case 2)', () => {
  const result = _isALetter('B')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 12: Should detect strings not matching a single letter', () => {
  const result = _isALetter('Ba')
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 13: Should detect strings not matching a single letter', () => {
  const result = _isALetter('&')
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 14: Should detect a valid precision of passport type', () => {
  const result = _isAValidPrecisionOfType('D', 'td1')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 15: Should accept NO precision of passport type', () => {
  const passport = {}
  const result = _isAValidPrecisionOfType(passport.precisionOftype, 'td1')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 16: Should detect a corrupted precision of passport type (1)', () => {
  const result = _isAValidPrecisionOfType('V', 'td1')
  expect(result).toBe(false)
})
