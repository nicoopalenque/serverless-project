const dynamodb = require('ebased/service/storage/dynamo');

const getClientService = async ({ dni }) => {
  const params = {
    TableName: process.env.CLIENTS_TABLE,
    Key: { dni }
  }
  const { Item } = await dynamodb.getItem(params);
  return Item;
}

module.exports = { getClientService }