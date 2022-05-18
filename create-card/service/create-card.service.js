const dynamodb = require('ebased/service/storage/dynamo');
const { creditCardNumber, expirationDate, securityCode } = require('../helper/random-number.helper');
const { setType } = require('../helper/card-type.helper');

const createCardService = async (commandPayload) => {
  const params = {
    TableName: process.env.CLIENTS_TABLE,
    Key: { dni: commandPayload.dni },
    ExpressionAttributeNames: {
      "#C": "creditCard",
    },
    ExpressionAttributeValues: {
      ":c": {
        number: creditCardNumber(),
        expiration: expirationDate(),
        ccv: securityCode(),
        type: setType(commandPayload),
      },
    },
    ReturnValues: "ALL_NEW",
    UpdateExpression: 'SET #C = :c',
  }

  await dynamodb.updateItem(params);
}

module.exports = { createCardService };