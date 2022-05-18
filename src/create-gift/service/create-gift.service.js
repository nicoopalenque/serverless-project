const dynamodb = require('ebased/service/storage/dynamo');

const { setGift } = require('../helper/set-gift.helper');

const createGiftService = async (commandPayload) => {
  const params = {
    TableName: process.env.CLIENTS_TABLE,
    Key: { dni: commandPayload.dni },
    UpdateExpression: 'set gift = :g',
    ExpressionAttributeValues: {
      ':g': setGift(commandPayload),
    },
    ReturnValues: 'ALL_NEW',

  }

  await dynamodb.updateItem(params);

}

module.exports = { createGiftService };