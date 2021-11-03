// route for login
const express = require('express');
const {login , dashboard} = require('../controllers/login')
const router = express.Router();


router.route('/login').post(login);
router.route('/dashboard').get(dashboard);


module.exports = router;