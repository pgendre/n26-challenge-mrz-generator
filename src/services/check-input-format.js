const countryCodes = require('./data/country-codes')

const checkInputFormat = ({ mrzType, passport, user }) => {
  if (!_isMrzTypeValid(type)) {
    throw new Error('Mrz type is not valid.')
  }
  _checkPassportInput(passport)
  _checkUserInput(user)
}

const _checkPassportInput = passport => {
  if (!_isALetter(passport.type)) {
    throw new Error('Passport type must be a letter.')
  }

  if (!_isAValidPrecisionOfType(passport.precisionOftype)) {
    throw new Error('Second letter for possport type is not valid.')
  }

  if (!_isCountryCodeValid(passport.issuingCountry)) {
    throw new Error('Passport issuing country is not a valid ISO 3166 code.')
  }

  if (
    !_isAnAlphaNumericString(passport.number) ||
    passport.number.length !== 9
  ) {
    throw new Error('Passport number does not match required format.')
  }

  if (
    !_isAnAlphaNumericString(passport.optionalField1) ||
    !_isAnAlphaNumericString(passport.optionalField2)
  ) {
    throw new Error('Optional fields must be an alphanumeric string.')
  }

  if (passport.optionalField2 && mrzType === 'td3') {
    throw new Error('Second optional field is not available for TD3 format.')
  }
  if (!_isDateFormatValid(passport.expirationDate)) {
    throw new Error('Passport expiration date is not valid.')
  }
}

const _checkUserInput = user => {
  if (!_isNameFormatValid(user.surname)) {
    throw new Error('Surname does not match required format.')
  }
  if (!_isNameFormatValid(user.givenNames)) {
    throw new Error('Given names do not match required format.')
  }
  if (!_isDateFormatValid(user.dateOfBirth)) {
    throw new Error("User's date of birth is not valid.")
  }
  if (!_isSexValid(user.dateOfBirth)) {
    throw new Error("User's date of birth is not valid.")
  }
}

const _isAnAlphaNumericString = str => new RegExp(/^[a-zA-Z0-9]+$/g).test(str)

const _isALetter = chr => new RegExp(/^[a-zA-Z]$/g).test(chr)

const _isAValidPrecisionOfType = (chr, mzrType) =>
  chr === undefined ||
  (_isALetter(chr) && (mzrType === 'td3' || chr.toUpperCase() !== 'V'))

const _isMrzTypeValid = type => ['td1', 'td3'].indexOf(type) !== -1

const _isDateFormatValid = stringDate => !isNaN(Date.parse(stringDate))

const _isNameFormatValid = name =>
  new RegExp(/^([a-zA-Z]+[ |-|-|']?)+$/g).test(name)

const _isCountryCodeValid = code => countryCodes.indexOf(code) !== -1

const _isSexValid = sex => ['female', 'male', 'unspecified'].indexOf(sex) !== -1

module.exports = { checkInputFormat }
