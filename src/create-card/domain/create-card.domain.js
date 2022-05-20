const { CreateCardValidation } = require('../schema/input/create-card.input');

const { createCardService } = require('../service/create-card.service');

const createCardDomain = async (commandPayload, commandMeta) => {
  const payload = JSON.parse(commandPayload.Message); //pasar esto al handler
  new CreateCardValidation(payload, commandMeta);

  await createCardService(payload);

  return {
    statusCode: 200,
    body: 'Card added succesfully'
  }
};

module.exports = { createCardDomain };