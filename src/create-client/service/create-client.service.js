const dynamodb = require('ebased/service/storage/dynamo');

const createClientService = async (commandPayload) => {
  
  const response = await dynamodb.putItem({
    TableName: process.env.CLIENTS_TABLE,
    Item: {
      ...commandPayload,
      active: true,
      credit: 0,
    },
  });
  
  return response;
}

module.exports = { createClientService };