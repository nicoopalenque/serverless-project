const { CreateCardValidation } = require('../schema/input/create-card.input');
const { CardCreated } = require('../schema/event/create-card.event');

const { createCardService } = require('../service/create-card.service');

const createCardDomain = async (commandPayload, commandMeta) => {
  // new CreateCardValidation(commandPayload, commandMeta);
  
  // await createCardService(new CardCreated(commandPayload, commandMeta));
  await createCardService(commandPayload.Message);
  
  return {
    statusCode: 200,
    body: 'Card added succesfully'
  }
};

module.exports = { createCardDomain };