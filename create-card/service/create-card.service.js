const dynamodb = require('ebased/service/storage/dynamo');
const { creditCardNumber, expirationDate, securityCode } = require('../helper/random-number.helper');
const { setType } = require('../helper/card-type.helper');

const createCardService = async (commandPayload) => {
  const cardNumber = creditCardNumber();
  const expiration = expirationDate();
  const code = securityCode();
  const type = setType(commandPayload);

  const dbParams = {
    ExpressionAttributeNames: {
      "#C": "creditCard",
    },
    ExpressionAttributeValues: {
      ":c": {
        M: {
          "number": {
            S: cardNumber,
          },
          "expiration": {
            S: expiration,
          },
          "ccv": {
            S: code,
          },
          "type": {
            S: type
          }
        },
      },
    },
    Key: {
      dni: {
        S: commandPayload.dni,
      },
    },
    ReturnValues: "ALL_NEW",
    TableName: process.env.CLIENTS_TABLE,
    UpdateExpression: "SET #C = :c",
  };

  await dynamodb.updateItem(dbParams);
}

module.exports = { createCardService };