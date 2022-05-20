const dynamodb = require('ebased/service/storage/dynamo');

const updateClientCommon = async (dni, payload) => {
  const params = {
    TableName: process.env.CLIENTS_TABLE,
    Key: { dni },
    UpdateExpression: 'SET',
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {},
    ReturnValues: 'ALL_NEW',
  }
  Object.keys(payload).forEach(key => {
    params.UpdateExpression += ` #${key}=:${key},`;
    params.ExpressionAttributeNames[`#${key}`] = key;
    params.ExpressionAttributeValues[`:${key}`] = payload[key];
  });
  params.UpdateExpression = params.UpdateExpression.slice(0, -1);
  const { Attributes } = await dynamodb.updateItem(params);
  return Attributes;
}

module.exports = { updateClientCommon }
