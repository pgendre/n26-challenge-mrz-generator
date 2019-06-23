const { generateMrzTd1 } = require('../../src/formats/td1')

const inputData = require('../data/input-for-formats')

test('FORMATS TD1: Should generate MRZ of format TD1', () => {
  const mrz = generateMrzTd1(inputData)
  expect(mrz).toBe(
    'P<FRA11AV568680<<<<<<<<<<<<<<<\n8610175M2105116FRA<<<<<<<<<<<<\nGENDRE<<PIERRE<JOSEPH<ALEXANDR'
  )
})
