const db = require('../utils/db');

module.exports = {
    getAll: () => db.load(`select * from Product`),
    getAllPaging: async (table, condition, orderBy, page, rowPerPage) => {
        const total = await db.getNumberOfRows(table, condition)
        var sum = JSON.stringify(total[0].Sum)
        return {
            ListGrid: await db.getAllPaging(table, condition, orderBy, page, rowPerPage),
            TotalCount: parseInt(sum)
        }
    },
    getListCategoryProduct: () => db.load(`select * from CategoryProduct`),
    add: (table, item) => db.add(table, item),
    update: (table, item, id) => db.update(table, item, id),
    delete: (table, id) => db.delete(table, id),
}