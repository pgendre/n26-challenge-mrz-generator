const { generateMrz } = require('../../src/formats/td3')

const inputData = require('./data/input')

test('FORMATS TD3: Should generate MRZ of format TD3', () => {
  const mrz = generateMrz(inputData)
  expect(mrz).toBe(
    'P<FRAGENDRE<<PIERRE<JOSEH<ALEXANDRE<<<<<<<<<\n11AV568680FRA8610175M2105116<<<<<<<<<<<<<<02'
  )
})
