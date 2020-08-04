const express = require('express')
const router = express.Router();
const loginModel = require('../models/Login.model');

router.get('/getUserByUsername', async (req, res) => {
    let user = await loginModel.getUserByUsername('User',req.query.username);
    res.json(user.users[0])
})
module.exports = router;