const db = require('../utils/db');
const common = require('../utils/common');
module.exports = {
    getUserByUsername: async (table, name) => {
        return {
            users: await db.load(`select * from ${table} where Username = '${name}'`)
        }
    },
}