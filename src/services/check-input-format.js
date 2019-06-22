const countryCodes = require('./data/country-codes')

const checkInputFormat = ({ passport, user }) => {
  _setDefaultValuesToUndefinedFields({ passport, user })
  _checkPassportInput(passport)
  _checkUserInput(user)
}

const _setDefaultValuesToUndefinedFields = ({ passport, user }) => {
  if (!passport.optionalField1) passport.optionalField1 = ''
  if (!passport.optionalField2) passport.optionalField2 = ''
}

const _checkPassportInput = passport => {
  _testAndThrowException(
    _isMrzTypeValid(passport.mrzType),
    'Mrz type is not valid.'
  )

  _testAndThrowException(
    _isALetter(passport.type),
    'Passport type must be a letter.'
  )

  _testAndThrowException(
    _isAValidPrecisionOfType(passport.typePrecision),
    'Second letter for passport type is not valid.'
  )

  _testAndThrowException(
    _isAValidPassportNumber(passport.number),
    'Passport number is not valid.'
  )
  _testAndThrowException(
    _isCountryCodeValid(passport.issuingCountry),
    'Passport issuing country is not a valid ISO 3166 code.'
  )

  _testAndThrowException(
    _isAnAlphaNumericString(passport.number) || passport.number.length !== 9,
    'Passport number does not match the required format.'
  )

  _testAndThrowException(
    !_isAnAlphaNumericString(passport.optionalField1),
    'Optional field 1 must be an alphanumeric string.'
  )

  _testAndThrowException(
    !_isAnAlphaNumericString(passport.optionalField2),
    'Optional field 2 must be an alphanumeric string.'
  )

  _testAndThrowException(
    !(passport.optionalField2 && mrzType === 'td3'),
    'Second optional field is not available for TD3 format.'
  )
  _testAndThrowException(
    !_isDateFormatValid(passport.expirationDate),
    'Passport expiration date is not valid.'
  )
}

const _checkUserInput = user => {
  _testAndThrowException(
    _isNameFormatValid(user.surname),
    'Surname does not match required format.'
  )

  _testAndThrowException(
    _isNameFormatValid(user.givenNames),
    'Given names do not match required format.'
  )
  _testAndThrowException(
    _isDateFormatValid(user.dateOfBirth),
    "User's date of birth is not valid."
  )

  _testAndThrowException(
    _isSexValid(user.dateOfBirth),
    "User's sex is not valid."
  )
}

const _testAndThrowException = (testToValidate, errorMessage) => {
  if (!testToValidate) {
    throw new Error(errorMessage)
  }
}

const _isAnAlphaNumericString = str => new RegExp(/^[a-zA-Z0-9]+$/g).test(str)

const _isALetter = chr => new RegExp(/^[a-zA-Z]$/g).test(chr)

const _isAValidPassportNumber = number =>
  new RegExp(/^[a-zA-Z0-9]{9}$/g).test(number)

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
