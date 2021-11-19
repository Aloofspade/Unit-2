const express = require('express')

const {login, register} = require('../Controllers/auth')

const router = express.Router()


router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;