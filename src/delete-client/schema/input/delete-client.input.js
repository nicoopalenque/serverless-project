const { InputValidation } = require('ebased/schema/inputValidation');

class DeleteClientValidation extends InputValidation {
  constructor(payload, meta) {
    super({
      payload,
      source: meta.source,
      specversion: 'v1.0.0',
      schema: {
        strict: true,
        dni: { type: String, required: true }
      },
      type: 'CLIENT.DELETE_CLIENT'
    })
  }
}

module.exports = { DeleteClientValidation };