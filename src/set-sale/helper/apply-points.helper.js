const { updateClientCommon } = require('../../common/update-client.common');

const applyPoints = async ({ sale }, client) => {
  const suma = sale.map( (e) => {
    return e.finalPrice;  
  })
  
  const total = suma.reduce((a,b) => a + b)

  const points = Math.trunc(total / 200);
  const credit = client.credit + points;
  await updateClientCommon(client.dni, { credit });

  return {
    totalPurchase: total,
    points
  };
}

module.exports = { applyPoints };