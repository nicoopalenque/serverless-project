const { updateClientCommon } = require('../../common/update-client.common');

const updateClientService = async ({ dni, ...payload }) => await updateClientCommon(dni, payload)

module.exports = { updateClientService };