const { ErrorHandled } = require('ebased/util/error');

const { SaleValidation } = require('../schema/input/set-sale.input');
const { getClientService } = require('../service/get-client.service');
const { validateClient } = require('../helper/validate-client.helper');
const { setSaleService } = require('../service/set-sale.service');

const setSaleDomain = async (commandPayload, commandMeta) => {
  new SaleValidation(commandPayload, commandMeta);

  const client = await getClientService(commandPayload);
  const isActive = validateClient(client);

  if(isActive) {
    const response = await setSaleService(client, commandPayload);
    return {
      statusCode: 200,
      body: response
    }
  }else{
    throw new ErrorHandled("Client can't buy", {
      status: 400,
      code: "BAD_REQUEST",
    })
  }
}

module.exports = { setSaleDomain }