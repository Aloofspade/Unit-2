const express = require('express');

const {jobs, dashboard} = require('../controllers/jobs')

const jobsMiddleware = require('../middleware/jobs')

const router = express.Router();

router.route('/jobs').post(login);
router.route('/dashboard').get(dashboard, jobsMiddleware);

module.exports = router;
