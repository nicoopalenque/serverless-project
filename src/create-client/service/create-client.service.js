const dynamodb = require('ebased/service/storage/dynamo');

const createClientService = async (commandPayload) => {
  
  const response = await dynamodb.putItem({
    TableName: process.env.CLIENTS_TABLE,
    Item: {
      ...commandPayload,
      active: true,
    },
  });
  
  return response;
}

module.exports = { createClientService };