const dynamodb = require('ebased/service/storage/dynamo');
const uuid = require('uuid');
const { applyDiscount } = require('../helper/apply-discount');

const setSaleService = async (client, payload) => {

  const sale = await applyDiscount(client, payload);

  const { Item } = await dynamodb.putItem({
    TableName: process.env.SALES_TABLE,
    Item: {
      id: uuid.v4(),
      dni: payload.dni,
      sale
    }
  })

  return Item;
}

module.exports = { setSaleService };