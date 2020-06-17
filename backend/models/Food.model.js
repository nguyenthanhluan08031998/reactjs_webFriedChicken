const db = require('../utils/db');

module.exports = {
    getAll: () => db.load(`select * from Product where IdCategoryProduct = 1`)
}