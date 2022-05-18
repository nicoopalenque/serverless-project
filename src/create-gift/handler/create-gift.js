const { batchEventMapper } = require('ebased/handler');
const inputMode = require("ebased/handler/input/batchEventQueue");
const outputMode = require("ebased/handler/output/batchEventConfirmation");

const { createGiftDomain } = require('../domain/create-gift.domain');

module.exports.handler = async (events, context) => batchEventMapper(
  { events, context },
  inputMode,
  createGiftDomain,
  outputMode,
);