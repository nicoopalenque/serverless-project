const sns = require("ebased/service/downstream/sns");
const { calculateAge } = require('../helper/calculate-age.helper');

const publishClientUpdated = async (clientUpdatedEvent) => {
  const { eventPayload, eventMeta } = clientUpdatedEvent.get();

  const year = calculateAge(eventPayload.birth);

  const snsPublishParams = {
    TopicArn:  year ? process.env.CLIENTS_CREATED_TOPIC : process.env.CLIENTS_UPDATED_TOPIC,
    Message: eventPayload,
  };

  return await sns.publish(snsPublishParams, eventMeta);
}

module.exports = { publishClientUpdated };