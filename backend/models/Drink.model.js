const db = require('../utils/db');

module.exports = {
    getAll: () => db.load(`select * from Product where IdCategoryProduct = 2`),
    addProductInCart:(table, item) => db.add(table, item),
}