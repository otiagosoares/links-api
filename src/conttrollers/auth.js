const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();
const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign In!!!')
});

router.get('/sign-up', async (req, res) => {

    const hash = bcrypt.hashSync('123456', saltRounds);
    const result = await Account.create({email: 'joaquim@gmail.com.br', password: hash });

    return res.json(result)
});

module.exports = router;