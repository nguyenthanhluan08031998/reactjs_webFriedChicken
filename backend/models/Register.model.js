const db = require('../utils/db');
const common = require('../utils/common');
module.exports = {
    add: (table, item) => db.add(table, item) ,
    update: (table, item, id) => db.update(table, item, id),
}