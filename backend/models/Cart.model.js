const db = require('../utils/db');

module.exports = {
    getAllCartById: (IdUser) => db.load(`select * from Cart, Product where Cart.IdUser= ${IdUser} and Cart.IsOrdered = 0 and Cart.IdProduct = Product.Id`),
    deleteProductInCart: (table, id) => db.delete(table, id),
    addProductInCart:(table, item) => db.add(table, item),
    updateProductInCart:(table, item, id) => db.update(table, item, id)
}