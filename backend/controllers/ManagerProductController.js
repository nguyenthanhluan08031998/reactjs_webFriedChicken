const express = require('express')
const router = express.Router();
const managerproductModel = require('../models/ManagerProduct.model');

router.get('/getAll', async (req, res) => {
    let data = await managerproductModel.getAll();
    res.json(data)
}),
    router.get('/getAllPaging', async (req, res) => {
        let page = req.query.page;
        let rowPerPage = req.query.rowPerPage;
        let data = await managerproductModel.getAllPaging('Product', null, null, page, rowPerPage);
        res.json(data)
    }),
    router.get('/getListCategoryProduct', async (req, res) => {
        let data = await managerproductModel.getListCategoryProduct();
        res.json(data)
    }),
    router.post('/addProduct', async (req, res) => {
        let product = req.body;
        await managerproductModel.add('Product', product);
        res.json(true)
    }),
    router.post('/updateProduct', async (req, res) => {
        let product = req.body;
        console.log(product)
        await managerproductModel.update('Product', product, product.Id);
        res.json(true)
    }),
    router.post('/deleteProduct', async (req, res) => {
        let product = req.body;
        await managerproductModel.delete('Product', product.Id);
        res.json(true)
    }),
    module.exports = router;