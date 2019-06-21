const { generateEmptyLine } = require('../services/strings')

const generateTd3Mrz = data => {}

const _generateLine1 = ({ passport, user }) => {
  let line1 = generateEmptyLine(44)
  line1[0] = passport.type.toUpperCase()
  console.log('3333', passport.type)
  console.log('LINE 1 ===========', line1)
}

module.exports = { generateTd3Mrz }
