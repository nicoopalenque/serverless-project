const { DownstreamEvent } = require('ebased/schema/downstreamEvent');

class CardCreated extends DownstreamEvent {
  constructor(payload, meta) {
    super({
      type: 'CARD.CREATE_CARD',
      specversion: 'v1.0.0',
      payload,
      meta,
      schema: {
        strict: false,
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        dni: { type: String, required: true },
        birth: { type: String, required: true }
      },
    })
  }
}

module.exports = { CardCreated };