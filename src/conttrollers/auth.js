const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

//middeware validator
const { accountSignUp, accountSignIn } = require('../validators/account')
const { getMessage } = require('../helpers/validator');

const router = express.Router();
const saltRounds = 10;

router.post('/sign-in', accountSignIn, (req, res) => {

    const {email, password } = req.body;
    return res.jsonOk();
});

router.post('/sign-up', accountSignUp, async (req, res) => {

    const {email, password } = req.body;
    
    const account = await Account.findOne({where: {email}});

    if(account) return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));
  
    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({email: email, password: hash });

    return res.jsonOk(newAccount,  getMessage('account.signup.success'));
});

module.exports = router;