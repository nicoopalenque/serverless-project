const { InputValidation } = require('ebased/schema/inputValidation');

class SaleValidation extends InputValidation {
  constructor(payload, meta) {
    super({
      payload,
      source: meta.source,
      specversion: 'v1.0.0',
      schema: {
        strict: true,
        dni: { type: String, required: true },
        sale: { type: Object, required: true}
      },
      type: 'SALE.SET_SALE'
    })
  }
}

module.exports = { SaleValidation };