const { getClientCommon } = require('../../common/get-client.common');

const getClient = async (dni) => await getClientCommon(dni);

module.exports = { getClient };
