const express = require('express')


const {auth, login} = require('../controllers/auth')


const router = express.Router()

router.route('/register').post(auth);
router.route('/login').put(login)

module.exports = router;