const { generateLine1 } = require('../../src/formats/td3/line1')
const { generateLine2 } = require('../../src/formats/td3/line2')

const inputData = require('./data/input')

test('FORMATS TD3 01: Should generate first line', () => {
  const line1 = generateLine1(inputData)
  expect(line1.length).toBe(44)
  expect(line1).toBe('P<FRAGENDRE<<PIERRE<JOSEH<ALEXANDRE<<<<<<<<<')
})

test('FORMATS TD3 02: Should generate second line', () => {
  const line2 = generateLine2(inputData)
  expect(line2.length).toBe(44)
  expect(line2).toBe('11AV568680FRA8610175M2105116<<<<<<<<<<<<<<02')
})
