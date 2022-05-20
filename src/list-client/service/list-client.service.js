const dynamodb = require('ebased/service/storage/dynamo');

const listClients = async () => {
  //TODO: Cambiar scan por query
  const params = {
    TableName: process.env.CLIENTS_TABLE
  }
  const { Items } = await dynamodb.scanTable(params);
  return Items;
}

module.exports = { listClients };