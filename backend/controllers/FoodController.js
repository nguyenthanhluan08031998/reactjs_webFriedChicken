const express = require('express')
const router = express.Router();
const foodModel = require('../models/Food.model');

router.get('/food', async (req, res) => {
    console.log("list:")
    const list = await foodModel.getAll()
    console.log("list:")
    res.json(list)
    console.log("list:", list)
})
module.exports = router;