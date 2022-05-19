const { InputValidation } = require('ebased/schema/inputValidation');

class UpdateClientValidation extends InputValidation {
  constructor(payload, meta) {
    super({
      payload,
      source: meta.source,
      specversion: 'v1.0.0',
      schema: {
        strict: true,
        dni: { type: String, required: true },
        creditCard: { type: Object, required: false},
        birth: { type: String, required: false },
        name: { type: String, required: false },
        lastName: { type: String, required: false },
        gift: { type: String, required: false },
      },
      type: 'CLIENT.UPDATE_CLIENT'
    })
  }
}

module.exports = { UpdateClientValidation };