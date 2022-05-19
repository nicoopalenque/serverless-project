const { UpdateClientValidation } = require('../schema/input/update-client.input');
const { ClientUpdated } = require('../schema/event/client-updated.event');

const { updateClientService } = require('../service/update-client.service');
const { publishClientUpdated } = require('../service/publish-client-updated.service');

const updateClientDomain = async (commandPayload, commandMeta) => {
  new UpdateClientValidation(commandPayload, commandMeta);
  
  const response = await updateClientService(commandPayload);
  await publishClientUpdated(new ClientUpdated(response, commandMeta));

  return {
    statusCode: 200,
    body: {
      status: true,
      info: 'Client updated successfully'
    }
  }
}

module.exports = { updateClientDomain };