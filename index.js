const { checkInputFormat } = require('src/services/checkInputFormat')

const generateMrz = data => {
  checkInputFormat(data)
}
