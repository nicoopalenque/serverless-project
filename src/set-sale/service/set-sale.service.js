const uuid = require('uuid');

const { applyDiscount } = require('../helper/apply-discount.helper');
const { putItemCommon } = require('../../common/put-item.common');


const setSaleService = async (client, payload) => {
  const sale = await applyDiscount(client, payload);

  const { Item } = await putItemCommon(
    process.env.SALES_TABLE,
    {
      id: uuid.v4(),
      dni: payload.dni,
      sale
    }
  )
  return Item;
}

module.exports = { setSaleService };