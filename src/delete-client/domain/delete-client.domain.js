const { DeleteClientValidation } = require('../schema/input/delete-client.input');

const { deleteClientService } = require('../service/delete-client.service');

const deleteClientDomain = async (commandPayload, commandMeta) => {
  new DeleteClientValidation(commandPayload, commandMeta);

  const response = await deleteClientService(commandPayload);

  return {
    statusCode: 200,
    body: {
      info: 'Client was disabled',
      client: response
    }
  }
}

module.exports = { deleteClientDomain };