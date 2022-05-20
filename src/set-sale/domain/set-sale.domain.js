const { ErrorHandled } = require('ebased/util/error');

const { SaleValidation } = require('../schema/input/set-sale.input');
const { validateClient } = require('../helper/validate-client.helper');
const { applyPoints } = require('../helper/apply-points.helper');
const { setSaleService } = require('../service/set-sale.service');
const { getClientCommon } = require('../../common/get-client.common');

const setSaleDomain = async (commandPayload, commandMeta) => {
  new SaleValidation(commandPayload, commandMeta);

  const client = await getClientCommon(commandPayload.dni);
  const isActive = validateClient(client);

  if(isActive) {
    const response = await setSaleService(client, commandPayload);

    const { totalPurchase, points } = await applyPoints(response, client);

    return {
      statusCode: 200,
      body: {
        response,
        totalPurchase,
        points
      }
    }
  }else{
    throw new ErrorHandled("Client can't buy", {
      status: 400,
      code: "BAD_REQUEST",
    })
  }
}

module.exports = { setSaleDomain }