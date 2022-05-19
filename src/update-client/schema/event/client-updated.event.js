const { DownstreamEvent } = require('ebased/schema/downstreamEvent');

class ClientUpdated extends DownstreamEvent {
  constructor(payload, meta) {
    super({
      type: 'CLIENT.UPDATE_CLIENT',
      specversion: 'v1.0.0',
      payload,
      meta,
      schema: {
        strict: false,
        dni: { type: String, required: true },
        creditCard: { type: Object, required: false},
        birth: { type: String, required: false },
        name: { type: String, required: false },
        lastName: { type: String, required: false },
        gift: { type: String, required: false },
      },
    })
  }
}

module.exports = { ClientUpdated };