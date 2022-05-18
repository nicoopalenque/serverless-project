const { ListClientValidation } = require('../schema/input/list-client.input');
const { listClients } = require('../service/list-client.service');

const listClientDomain = async (commandPayload, commandMeta) => {
  new ListClientValidation(commandPayload, commandMeta);
  
  const items = await listClients();

  return {
    statusCode: 200,
    body: items
  }
}

module.exports = { listClientDomain };