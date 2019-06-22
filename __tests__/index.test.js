const { generateMrz } = require('../index')

const inputDataForTd1 = require('./data/input-for-global-tests-td1')

test('LIB GLOBAL 01: Should call export function and generate a complete TD1 MRZ.', () => {
  const mrz = generateMrz(inputDataForTd1)
  expect(mrz).toBe(
    'P<FRA11AV568680<<<<<<<<<<<<<<<\n8610175M2105116FRA<<<<<<<<<<<<\nGENDRE<<PIERRE<JOSEH<ALEXANDRE'
  )
})
