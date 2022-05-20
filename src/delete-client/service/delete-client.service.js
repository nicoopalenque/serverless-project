const { updateClientCommon } = require('../../common/update-client.common');

const deleteClientService = async (payload) =>
  await updateClientCommon(payload.dni, { active: false })

module.exports = { deleteClientService };