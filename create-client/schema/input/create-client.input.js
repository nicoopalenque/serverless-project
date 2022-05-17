const { InputValidation } = require('ebased/schema/inputValidation');

class CreateClientValidation extends InputValidation {
  constructor(payload, meta) {
    super({
      payload,
      source: meta.source,
      specversion: 'v1.0.0',
      schema: {
        strict: false,
        name: { type: String, required: true},
        lastName: { type: String, required: true},
        dni: { type: String, required: true},
        birth: { type: String, required: true},
      },
      type: 'CLIENT.CREATE_CLIENT'
    })
  }
}

module.exports = { CreateClientValidation };
