const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();
const saltRounds = 10;

router.post('/sign-in', (req, res) => {

    const {email, password } = req.body;
    return res.jsonOk();
});

router.post('/sign-up', async (req, res) => {

    const {email, password } = req.body;
    
    const account = await Account.findOne({where: {email}});

    if(account) return res.jsonBadRequest(null, 'A conta já existe');

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({email: email, password: hash });

    return res.jsonOk(newAccount, 'Usuário Criado com Sucesso!');
});

module.exports = router;