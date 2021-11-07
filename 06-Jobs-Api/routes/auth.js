const express = require('express')


const {auth, dashboard} = require('../controllers/auth')

const authenticationMiddleware = require('../middleware/auth')

const router = express.Router()

router.route('/auth').post(auth);
router.route('/dashboard').put(dashboard, authenticationMiddleware)

module.exports = router;