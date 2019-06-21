// const rewire = require('rewire')
// const service = rewire('../../src/services/strings')
const {
  generateEmptyLine,
  replaceSubStringAtPositionUppercase
} = require('../../src/services/strings')

// const _doesStringFitToFormat = service.__get__('_doesStringFitToFormat')

test('SERVICES STRINGS 02: Should throw an error bad input in \
  replaceSubStringAtPosition', () => {
  const emptyLine = generateEmptyLine(35)
  try {
    replaceSubStringAtPositionUppercase(emptyLine, 'E'.repeat(32), 6)
  } catch (e) {
    expect(e.message).toBe('replaceSubStringAtPosition : invalid input')
  }
})

test('SERVICES STRINGS 03: replaceSubStringAtPosition should return \
  correct string', () => {
  const emptyLine = generateEmptyLine(25)
  const result = replaceSubStringAtPositionUppercase(emptyLine, 'abcDefG1E', 6)
  expect(result).toBe('<<<<<<ABCDEFG1E<<<<<<<<<<')
})
