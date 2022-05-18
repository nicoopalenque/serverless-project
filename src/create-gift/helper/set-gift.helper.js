const setGift = (payload) => {
  const date = new Date(payload.birth);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if(month >= 1 && month <= 3) {
    return month === 3 && day >= 21 ? 'Buzo' : 'Remera';
  }

  if(month >= 4 && month <= 6) {
    return month === 6 && day >= 21 ? 'Sweater' : 'Buzo';
  }

  if(month >= 7 && month <= 9) {
    return month === 9 && day >= 21 ? 'Camisa' : 'Sweater';
  }

  if(month >= 10 && month <= 12) {
    return month === 12 && day >= 21 ? 'Remera' : 'Camisa';
  }
}

module.exports = { setGift };