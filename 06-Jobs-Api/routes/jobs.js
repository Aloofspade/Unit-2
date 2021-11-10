const express = require('express');

const {createJob,  getAllJobs, getJob, deleteJob, updateJob} = require('../controllers/createjob')



const router = express.Router();

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);



module.exports = router;
