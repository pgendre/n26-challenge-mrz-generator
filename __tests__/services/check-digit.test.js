const rewire = require('rewire')
const service = rewire('../../src/services/check-digit')

test('SERVICES CHECK DIGIT 01: Should identify a string matching the expected format', () => {
  const _doesStringFitToFormat = service.__get__('_doesStringFitToFormat')
  const result = _doesStringFitToFormat('ERT43443<<43334<3')
  expect(result).toBe(true)
})

test('SERVICES CHECK DIGIT 02: Should identify a string NOT matching the expected format (case 1)', () => {
  const _doesStringFitToFormat = service.__get__('_doesStringFitToFormat')
  const result = _doesStringFitToFormat('ERT4344@<43334<3')
  expect(result).toBe(false)
})

test('SERVICES CHECK DIGIT 03: Should identify a string NOT matching the expected format (case 2)', () => {
  const _doesStringFitToFormat = service.__get__('_doesStringFitToFormat')
  const result = _doesStringFitToFormat('ERT4344:<43334<3')
  expect(result).toBe(false)
})

test('SERVICES CHECK DIGIT 04: Should identify a string NOT matching the expected format (case 3)', () => {
  const _doesStringFitToFormat = service.__get__('_doesStringFitToFormat')
  const result = _doesStringFitToFormat('EaRT4344<43334<3')
  expect(result).toBe(false)
})
