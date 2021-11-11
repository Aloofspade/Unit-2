const Job = require('../models/Jobs')

const {StatusCode} = ('http-status-codes')

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({createdBy: req.user.userID}).sort("created at")
    res.status(StatusCode.OK).json({jobs, length: jobs.length})
}

const getJob = (req, res) => {
    const {userID} = req.user.userID
    const {id: jobID} = req.params

    const job = await job.findOne({createdBy: userID, _id: jobID})
    if(!job){
        throw new NotFoundError(`not job wiht id  ${jobID}`)
    }

    res.status(StatusCode.OK).json({ job })
};

const createJob = (req, res) => {
    req.body.createBy = req.user.userID;
    const job = await Job.create(req.body);
    

    res.status(StatusCode.CREATED).json(job);
}

const updateJob = (req, res) => {
    res.send("updateJob");
}

const deleteJob = (req, res) => {
    res.send("deleteJob");
}

module.exports = {getAllJobs,getJob, createJob, updateJob, deleteJob};