const countryCodes = require('./data/country-codes')
const checkInputFormat = ({ passport, user }) => {}

const _isDateFormatValid = stringDate => !isNaN(Date.parse(stringDate))

const _isNameFormatValid = name =>
  new RegExp(/^([a-zA-Z]+[ |-|-|']?)+$/g).test(name)

const _isCountryCodeValid = code => countryCodes.indexOf(code) !== -1
