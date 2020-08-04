const express = require('express')
const router = express.Router();
const registerModel = require('../models/Register.model');

router.post('/add', async (req, res) => {
    let id = -1;
    let item = req.body;
    result = await registerModel.add('User', item)
    if (result.affectedRows > 0 && result.insertId) id = result.insertId
    return res.json(id)
}),
router.post('/update', async(res, req) => {
    let item = req.body;
    await registerModel.update('User', item, item.Id)
})
module.exports = router;