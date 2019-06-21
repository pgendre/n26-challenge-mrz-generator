const rewire = require('rewire')
const service = rewire('../../../src/services/check-input-format')

const _isAnAlphaNumericString = service.__get__('_isAnAlphaNumericString')
const _isSexValid = service.__get__('_isSexValid')
const _testAndThrowException = service.__get__('_testAndThrowException')

test('SERVICES CHECK INPUT FORMAT 15: Should detect a valid alpha numeric string', () => {
  const result = _isAnAlphaNumericString('REER678try760')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 16: Should detect a corrupted alpha numeric string', () => {
  const result = _isAnAlphaNumericString('REER*78try760')
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 17: Should detect a valid sex', () => {
  const result = _isSexValid('unspecified')
  expect(result).toBe(true)
})

test('SERVICES CHECK INPUT FORMAT 18: Should detect a valid sex', () => {
  const result = _isSexValid('uspecified')
  expect(result).toBe(false)
})

test('SERVICES CHECK INPUT FORMAT 19: Should not throw an exception \
  if test OK', () => {
  _testAndThrowException(true, 'error message')
})

test('SERVICES CHECK INPUT FORMAT 20: Should not throw an exception \
  if test OK', () => {
  try {
    _testAndThrowException(false, 'error message')
  } catch (e) {
    expect(e.message).toBe('error message')
  }
})
