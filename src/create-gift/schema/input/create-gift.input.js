const { InputValidation } = require('ebased/schema/inputValidation');

class CreateGiftValidation extends InputValidation {
  constructor(payload, meta) {
    super({
      payload,
      source: meta.source,
      specversion: 'v1.0.0',
      schema: {
        strict: false,
        name: { type: String, required: false},
        lastName: { type: String, required: false},
        dni: { type: String, required: true},
        birth: { type: String, required: false},
      },
      type: 'GIFT.CREATE_GIFT'
    })
  }
}

module.exports = { CreateGiftValidation };
