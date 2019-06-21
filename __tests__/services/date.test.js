const { stringDateToYYMMDD } = require('../../src/services/date')

test('SERVICES DATE 01: Should convert a string date to format YYMMDD.', () => {
  const result = stringDateToYYMMDD('04 Dec 1995 00:12:00 GMT')
  expect(result).toBe('951204')
})
