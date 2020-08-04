const express = require('express')
const router = express.Router();
const cartrModel = require('../models/Cart.model');

router.get('/getAllCartByIdUser', async (req, res) => {
    let IdUser = req.query.IdUser;
    const list = await cartrModel.getAllCartById(IdUser)
    res.json(list)
})
router.post('/deleteProductInCart', async (req, res) => {
    let item = req.body;
    await cartrModel.deleteProductInCart('Cart', item.Id)
    res.json(true)
})
router.post('/addProductInCart', async(req, res)=>{
    let item = req.body;
    await cartrModel.addProductInCart('Cart', item)
    res.json(true)
})
router.post('/updateProductInCart', async (req, res)=>{
    let item = req.body;
    await cartrModel.updateProductInCart('Cart', item, item.Id)
})
module.exports = router;