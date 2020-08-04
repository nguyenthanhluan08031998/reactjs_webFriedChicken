const express = require('express')
const router = express.Router();
const headbarModel = require('../models/HeadBar.model');

// router.get('/getAllCartByIdUser', async (req, res) => {
//     let IdUser = req.query.IdUser;
//     const list = await headbarModel.getAllCartById(IdUser)
//     res.json(list)
// })
// router.post ('/deleteProductInCart', async(req, res) =>{
//     let item = req.body;
//     await headbarModel.deleteProductInCart('Cart', item.Id)
//     res.json(true) 
// })
module.exports = router;