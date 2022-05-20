const { CreateGiftValidation } = require('../schema/input/create-gift.input');

const { createGiftService } = require('../service/create-gift.service');

const createGiftDomain = async (commandPayload, commandMeta) => {
  const payload = JSON.parse(commandPayload.Message); //Pasar esto al handler
  new CreateGiftValidation(payload, commandMeta);

  await createGiftService(payload);

  return {
    statusCode: 200,
    body: 'Gift added succesfully'
  }
};

module.exports = { createGiftDomain };