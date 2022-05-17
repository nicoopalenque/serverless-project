const dynamodb = require('ebased/service/storage/dynamo');
const { creditCardNumber, expirationDate, securityCode } = require('../helper/random-number.helper');
const { setType } = require('../helper/card-type.helper');

const createCardService = async (commandPayload) => {
  const dbParams = {
    dni: commandPayload.dni,
    name: commandPayload.name,
    lastName: commandPayload.lastName,
    birth: commandPayload.birth,
    creditCard: {
      number: creditCardNumber(),
      expiration: expirationDate(),
      ccv: securityCode(),
      type: setType(commandPayload),
    },
    status: 'ACTIVE',
  }

  return await dynamodb.putItem({
    TableName: process.env.CLIENTS_TABLE,
    Item: dbParams,
  })
}

module.exports = { createCardService };