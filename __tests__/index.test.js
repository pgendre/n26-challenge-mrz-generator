const { generateMrz } = require('../index')

const inputData = require('./data/input-for-global-tests-td1')

test('LIB GLOBAL 01: Should call export function and generate a complete TD1 MRZ.', () => {
  generateMrz
})
