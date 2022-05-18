const { ErrorHandled } = require('ebased/util/error');

const { CreateClientValidation } = require('../schema/input/create-client.input');
const { ClientCreated } = require('../schema/event/client-created.event');

const { calculateAge } = require('../helper/calculate-age.helper');

const { createClientService } = require('../service/create-client.service');
const { publishClientCreated } = require('../service/publish-client-created.service');

const createClientDomain = async (commandPayload, commandMeta) => {
  new CreateClientValidation(commandPayload, commandMeta);

  if(!calculateAge(commandPayload.birth)) {
    throw new ErrorHandled("Client can't get a credit card", {
      status: 400,
      code: "BAD_REQUEST",
    })
  }

  await createClientService(commandPayload);
  await publishClientCreated(new ClientCreated(commandPayload, commandMeta));

  return {
    statusCode: 200,
    body: 'Client added succesfully'
  }
}

module.exports = { createClientDomain };