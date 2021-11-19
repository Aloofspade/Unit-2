const mongoose = require('mongoose')

const JobsSchema =  new mongoose.Schema({
    company: {
        type:  String,
        required: [true, "Company name must be provided"],
        maxlength: 50

    },
    position: {
        type:  String,
        required: [true, 'must provide a position'], 
        maxlength: 100
    }, 
     //idk about this one 
    status: {
        type: String,
        default: false,
        default: "pending",

    },
    createdBy: {
        type:  mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide user"]
    },
    
},
{timestamp: true}
)

module.exports = mongoose.model("Job", JobsSchema);