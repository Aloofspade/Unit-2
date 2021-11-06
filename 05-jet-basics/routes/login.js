// route for login
const express = require('express');
const {login , dashboard} = require('../controllers/login')
const authenticationMiddleware = require('../middleware/auth')
const router = express.Router();


router.route('/login').post(login);
router.route('/dashboard').get(authenticationMiddleware, dashboard);


module.exports = router;