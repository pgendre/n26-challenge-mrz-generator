const { generateMrz } = require('../../src/formats/td1')

const inputData = require('./data/input')

test('FORMATS TD1: Should generate MRZ of format TD1', () => {
  const mrz = generateMrz(inputData)
  console.log('MRZ=', mrz)
  expect(mrz).toBe(
    'P<FRAGENDRE<<PIERRE<JOSEH<ALEXANDRE<<<<<<<<<\n11AV568680FRA8610175M2105116<<<<<<<<<<<<<<02'
  )
})
