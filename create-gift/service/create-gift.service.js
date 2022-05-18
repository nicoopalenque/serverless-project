const dynamodb = require('ebased/service/storage/dynamo');

const { setGift } = require('../helper/set-gift.helper');

const createGiftService = async (commandPayload) => {
  const params = {
    TableName: process.env.CLIENTS_TABLE,
    Key: { dni: commandPayload.dni },
    ExpressionAttributeNames: {
      "#C": "gift"
    },
    ExpressionAttributeValues: {
      ":g": {
        gift: setGift(commandPayload),
      }
    },
    ReturnValues: 'ALL_NEW',
    UpdateExpression: 'SET #C = :g',
  }

  await dynamodb.updateItem(params);

}

module.exports = { createGiftService };