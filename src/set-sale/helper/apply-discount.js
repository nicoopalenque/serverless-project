const applyDiscount = ({ creditCard }, { sale }) => {
  const discount = creditCard.type === 'Gold' ? 0.12 : 0.08
  const today = new Date();

  const response = sale.map((product) => {
    const element = {};
    element['product'] = product.product;
    element['price'] = product.price - (product.price * discount);
    element['discount'] = `${discount}%`;
    element['date'] = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()} ${today.getHours()}:${today.getMinutes()}`;
    return element;
  })

  return response;
}

module.exports = { applyDiscount }