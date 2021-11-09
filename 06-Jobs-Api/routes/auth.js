const express = require('express')


const {auth, dashboard} = require('../controllers/auth')

const authenticationMiddleware = require('../middleware/auth')

const router = express.Router()

router.route('/register').post(auth);
router.route('/login').put(dashboard, authenticationMiddleware)

module.exports = router;