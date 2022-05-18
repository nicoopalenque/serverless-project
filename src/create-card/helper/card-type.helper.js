const { calculateAge } = require('./calculate-age.helper');

const setType = (commandPayload) => calculateAge(commandPayload.birth) ? 'Gold' : 'Classic';

module.exports = { setType };