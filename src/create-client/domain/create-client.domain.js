const { CreateClientValidation } = require('../schema/input/create-client.input');
const { ClientCreated } = require('../schema/event/client-created.event');

const { calculateAge } = require('../helper/calculate-age.helper');

const { createClientService } = require('../service/create-client.service');
const { publishClientCreated } = require('../service/publish-client-created.service');

const createClientDomain = async (commandPayload, commandMeta) => {
  new CreateClientValidation(commandPayload, commandMeta);

  if(!calculateAge(commandPayload.birth)) {
    return {
      statusCode: 400,
      body: "Client can't get a credit card",
    }
  }

  await createClientService(commandPayload);
  await publishClientCreated(new ClientCreated(commandPayload, commandMeta));

  return {
    statusCode: 200,
    body: 'Client added succesfully'
  }
}

module.exports = { createClientDomain };