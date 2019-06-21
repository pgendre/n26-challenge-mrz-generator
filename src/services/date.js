const stringDateToYYMMDD = strDate =>
  new Date(strDate)
    .toISOString()
    .slice(2, 10)
    .replace(/-/g, '')

module.exports = { stringDateToYYMMDD }
