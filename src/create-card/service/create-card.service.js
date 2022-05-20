const { updateClientCommon } = require('../../common/update-client.common');
const { creditCardNumber, expirationDate, securityCode } = require('../helper/random-number.helper');
const { setType } = require('../helper/card-type.helper');

const createCardService = async (commandPayload) => {
  const params = {
    number: creditCardNumber(),
    expiration: expirationDate(),
    ccv: securityCode(),
    type: setType(commandPayload),
  };
  return await updateClientCommon(commandPayload.dni, { creditCard: params });
}

module.exports = { createCardService };