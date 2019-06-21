// Rewire allows to get private methods for unit tests
const rewire = require('rewire')
const testedModule = rewire('../../src/formats/td3')
const inputData = require('./data/input')

const _generateLine1 = testedModule.__get__('_generateLine1')
const _generateLine2 = testedModule.__get__('_generateLine2')

// test('FORMATS TD3 01: Should generate first line', () => {
//   const line1 = _generateLine1(inputData)
//   expect(line1.length).toBe(44)
//   expect(line1).toBe('P<UTORAMOND<D<AURTH<ULIS<<JEAN<HENRI<ANTOINE')
// })

test('FORMATS TD3 02: Should generate second line', () => {
  const line2 = _generateLine2(inputData)
  expect(line2.length).toBe(44)
  // expect(line1).toBe('P<UTORAMOND<D<AURTH<ULIS<<JEAN<HENRI<ANTOINE')
})
