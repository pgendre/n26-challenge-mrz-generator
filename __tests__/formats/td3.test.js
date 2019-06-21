// Rewire allows to get private methods for unit tests
const rewire = require('rewire')
const testedModule = rewire('../../src/formats/td3')
const inputData = require('./data/input')
const _generateLine1 = testedModule.__get__('_generateLine1')

test('FORMATS TD3 01: Should generate first line', () => {
  const result = _generateLine1(inputData)
  // expect(result).toBe(true)
})
