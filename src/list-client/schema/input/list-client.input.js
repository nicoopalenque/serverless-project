const { InputValidation } = require('ebased/schema/inputValidation');

class ListClientValidation extends InputValidation {
  constructor(payload, meta) {
    super({
      payload,
      source: meta.source,
      specversion: 'v1.0.0',
      schema: {
        strict: true,
        dni: { type: String, required: false}
      },
      type: 'CLIENT.LIST_CLIENT',
    })
  }
}

module.exports = { ListClientValidation };