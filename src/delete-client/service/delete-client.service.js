const dynamodb = require('ebased/service/storage/dynamo');

const deleteClientService = async (payload) => {
  const { dni } = payload;

  const params = {
    TableName: process.env.CLIENTS_TABLE,
    Key: { dni },
    UpdateExpression: 'set active = :a',
    ExpressionAttributeValues: {
      ':a': false,
    },
    ReturnValues: 'ALL_NEW',
  }

  const { Attributes } = await dynamodb.updateItem(params);
  return Attributes;
}

module.exports = { deleteClientService };