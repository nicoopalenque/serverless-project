const { batchEventMapper } = require('ebased/handler');
const inputMode = require("ebased/handler/input/batchEventQueue");
const outputMode = require("ebased/handler/output/batchEventConfirmation");

const { createCardDomainÂ } = require('../domain/create-card.domain');

module.exports.handler = async (events, context) => {
  return batchEventMapper(
    { events, context },
    inputMode,
    createCardDomain,
    outputMode,
  )
};
