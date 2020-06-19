const express = require('express')
const router = express.Router();
const drinkModel = require('../models/Drink.model');

router.get('/drink', async (req, res) => {
    const list = await drinkModel.getAll()
    res.json(list)
})
module.exports = router;