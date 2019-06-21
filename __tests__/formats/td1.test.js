const { generateLine1 } = require('../../src/formats/td1/line1')
// const { generateLine2 } = require('../../src/formats/td1/line2')
// const { generateLine3 } = require('../../src/formats/td1/line3')

const inputData = require('./data/input')

test('FORMATS TD1 01: Should generate first line', () => {
  const line1 = generateLine1(inputData)
  expect(line1.length).toBe(30)
  expect(line1).toBe('P<FRAGENDRE<<PIERRE<JOSEH<ALEXANDRE<<<<<<<<<')
})
