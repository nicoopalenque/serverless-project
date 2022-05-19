const { commandMapper } = require('ebased/handler');
const inputMode = require("ebased/handler/input/commandApi");
const outputMode = require("ebased/handler/output/commandApi");

const { deleteClientDomain } = require('../domain/delete-client.domain');

module.exports.handler = async (command, context) => {
  return commandMapper(
    { command, context },
    inputMode,
    deleteClientDomain,
    outputMode,
  );
};