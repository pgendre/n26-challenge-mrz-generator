const { generateMrz } = require('../index')

const inputDataForTd1 = require('./data/input-for-global-tests-td1')
const inputDataForTd3 = require('./data/input-for-global-tests-td3')

test('LIB GLOBAL 01: Should call export function and generate a complete TD1 MRZ.', () => {
  const mrz = generateMrz(inputDataForTd1)
  expect(mrz).toBe(
    'P<FRA11AV568680<<<<<<<<<<<<<<<\n8610175M2105116FRA<<<<<<<<<<<<\nGENDRE<<PIERRE<JOSEH<ALEXANDRE'
  )
})

test('LIB GLOBAL 02: Should call export function and generate a complete TD3 MRZ.', () => {
  const mrz = generateMrz(inputDataForTd3)
  expect(mrz).toBe(
    'P<FRAGENDRE<<PIERRE<JOSEH<ALEXANDRE<<<<<<<<<\n11AV568680FRA8610175M2105116<<<<<<<<<<<<<<02'
  )
})
