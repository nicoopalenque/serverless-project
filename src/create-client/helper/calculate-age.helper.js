const calculateAge = (birthday) => {
  const birthDate = new Date(birthday); //YYYYMMDD
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  const clientAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  const response = clientAge >= 18 & clientAge <= 65 ? true : false;
  return response;
};

module.exports = { calculateAge };