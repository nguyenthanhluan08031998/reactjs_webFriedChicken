const express = require('express')
const router = express.Router();
const foodModel = require('../models/Food.model');

router.get('/getAll', async (req, res) => {
    const list = await foodModel.getAll();
    res.json(list)
})
module.exports = router;