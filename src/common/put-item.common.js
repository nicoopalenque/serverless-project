const dynamodb = require('ebased/service/storage/dynamo');

const putItemCommon = async (TableName, Item) => {
  const response = await dynamodb.putItem({
    TableName,
    Item
  });
  
  return response;
}

module.exports = { putItemCommon };