const { ListClientValidation } = require('../schema/input/list-client.input');
const { getClientHelper } = require('../helper/get-client.helper');

const listClientDomain = async (commandPayload, commandMeta) => {
  new ListClientValidation(commandPayload, commandMeta);
  
  const response = await getClientHelper(commandPayload);

  return {
    statusCode: 200,
    body: response
  }
}

module.exports = { listClientDomain };