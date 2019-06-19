const checkInputFormat = ({ passport, user }) => {}

const _isDateFormatValid = stringDate => !isNaN(Date.parse(stringDate))

const _isNameFormatValid = name =>
  new RegExp(/^([a-zA-Z]+[ |-|-|']?)+$/g).test(name)
