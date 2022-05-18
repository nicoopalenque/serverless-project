const { CreateGiftValidation } = require('../schema/input/create-gift.input');

const { createGiftService } = require('../service/create-gift.service');

const createGiftDomain = async (commandPayload, commandMeta) => {
  const payload = JSON.parse(commandPayload.Message);
  new CreateGiftValidation(payload, commandMeta);

  await createGiftService(payload);

  return {
    statusCode: 200,
    body: 'Gift added succesfully'
  }
};

module.exports = { createGiftDomain };