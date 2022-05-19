const randomNumber = (minimum, maximum) => {
  return Math.round( Math.random() * (maximum - minimum) + minimum);
}

const creditCardNumber = () => `${randomNumber(1000, 9999)}-${randomNumber(1000, 9999)}-${randomNumber(1000, 9999)}-${randomNumber(1000, 9999)}`;
const expirationDate = () => `${randomNumber(01, 12)}/${randomNumber(21, 35)}`
const securityCode = () => `${randomNumber(100, 999)}`

module.exports = { randomNumber, creditCardNumber, expirationDate, securityCode };