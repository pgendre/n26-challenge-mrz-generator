const {
  generateEmptyLine,
  replaceSubStringAtPositionToUpCase,
  replaceSpecialCharsBySpaces,
  truncateString
} = require('../../src/services/string')

test('SERVICES STRINGS 01: <replaceSubStringAtPositionToUpCase> should throw \
  an error bad input in ', () => {
  const emptyLine = generateEmptyLine(35)
  try {
    replaceSubStringAtPositionToUpCase(emptyLine, 'E'.repeat(32), 6)
  } catch (e) {
    expect(e.message).toBe('replaceSubStringAtPosition : invalid input')
  }
})

test('SERVICES STRINGS 02: <replaceSubStringAtPosition> should return \
  correct string', () => {
  const emptyLine = generateEmptyLine(25)
  const result = replaceSubStringAtPositionToUpCase(emptyLine, 'abcDefG1E', 6)
  expect(result).toBe('<<<<<<ABCDEFG1E<<<<<<<<<<')
})

test('SERVICES STRINGS 03: <replaceSpecialCharsBySpaces> should return \
  correct string', () => {
  const result = replaceSpecialCharsBySpaces("Darth des Vailles d'Orthus-Mer")
  expect(result).toBe('Darth<des<Vailles<d<Orthus<Mer')
})

test('SERVICES STRINGS 04: <truncateString> should return \
  correct string', () => {
  const result = truncateString('123456789ABCD', 5)
  expect(result).toBe('12345')
})
