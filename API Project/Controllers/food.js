const Job = require('../models/Jobs')

const {StatusCode} = ('http-status-codes')

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({createdBy: req.user.userID}).sort("created at")
    res.status(StatusCode.OK).json({jobs, length: jobs.length})
}

const getJob = async (req, res) => {
    const {userID} = req.user.userID
    const {id: jobID} = req.params

    const job = await job.findOne({createdBy: userID, _id: jobID})
    if(!job){
        throw new NotFoundError(`not job wiht id  ${jobID}`)
    }

    res.status(StatusCode.OK).json({ job })
};

const createJob = async (req, res) => {
    req.body.createBy = req.user.userID;
    const job = await Job.create(req.body);
    

    res.status(StatusCode.CREATED).json(job);
}

const updateJob = async (req, res) => {
    // const {company, position} = req.body;
    // const {userID} = req.user

    // const {id, jobID} = req.params;

    const {
        body: {company, position},
        user: {userID},
        params: {id, jobID}
    } = req


    if (!company || !position) {
        throw new BadRequestError("Please provide company and position")

    }

    const job = await Job.findByIdAndUpdate(
        
        {_id: jobID, createBy: userID},
        req.body,
        {new: true, runValidators: true}
        
        );


        if(!job){
        throw new BadRequestError(`no job with id ${jobID}`)
        }

        res.status(StatusCode.OK).json({job})
}

const deleteJob = async (req, res) => {
   const {
       params: {id: jobID},
       use: {userID}
   } = req

   const job = await Job.findByIdAndRemove({_id: jobID, createBy: userID});

   res.status(StatusCode.OK).json({job})

   if(!job){
       throw new BadRequestError(`no job with id ${jobID} found`)
   }
}

module.exports = {getAllJobs,getJob, createJob, updateJob, deleteJob};