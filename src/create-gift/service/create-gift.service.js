const dynamodb = require('ebased/service/storage/dynamo');
const { updateClientCommon } = require('../../common/update-client.common');

const { setGift } = require('../helper/set-gift.helper');

const createGiftService = async (commandPayload) => {
  const gift = setGift(commandPayload);
  return await updateClientCommon(commandPayload.dni, { gift });
}

module.exports = { createGiftService };