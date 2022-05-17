const dynamodb = require('ebased/service/storage/dynamo');

const createClientService = async (commandPayload) => {
  await dynamodb.putItem({
    TableName: process.env.CLIENTS_TABLE,
    Item: commandPayload,
  });
}

module.exports = { createClientService };