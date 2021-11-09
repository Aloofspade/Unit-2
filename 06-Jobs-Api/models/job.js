const mongoose = require('mongoose')

const JobsSchema =  new mongoose.Schema({
    company: {
        type:  String,
        required: [true, "Company name must be provided"],
        maxLength: [50, 'name must be less than 50 characters']

    },
    position: {
        type:  String,
        required: [true, 'must provide a position'], 
        maxLength: [100, 'must be less than 100 characters']
    }, 
     //idk about this one 
    status: {
        type: String,
        default: false,
        default: Date.now,

    },
    createdBy: {
        jobSchema = new mongoose.Schema({ job: mongoose.ObjectId })
    },
    timeStamp: {
        currentTime: () => Math.floor(Date.now() / 1000) 
    }
})

module.exports = mongoose.model("Job", JobsSchema);