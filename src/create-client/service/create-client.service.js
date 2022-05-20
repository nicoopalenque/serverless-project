const { putItemCommon } = require('../../common/put-item.common');

const createClientService = async (commandPayload) => {
  return await putItemCommon(
    process.env.CLIENTS_TABLE,
    {
      ...commandPayload,
      active: true,
      credit: 0,
    }
  )
}

module.exports = { createClientService };