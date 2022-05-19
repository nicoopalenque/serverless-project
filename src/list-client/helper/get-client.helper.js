const { listClients } = require('../service/list-client.service');
const { getClient } = require('../service/get-client.service');

const getClientHelper = async ({ dni }) => {
  if(dni) {
    return await getClient(dni);
  }else{
    return await listClients();
  }
};

module.exports = { getClientHelper };