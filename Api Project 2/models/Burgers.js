const mongoose = require('mongoose')

const BurgersSchema =  new mongoose.Schema({
    name: {
      type:  String,
      required: [true, 'must provide a position'], 
      maxlength: 100
      },
      burger: {
        type:  String,
        required: [true, 'must provide a position'], 
        maxlength: 100
      },
      flavor: {
        type:  String,
        required: [true, 'must provide a position'], 
        maxlength: 100
      },
      remove: 
        {
          type:  String,
          default: false,
          maxlength: 100
        }
      
      
    
},
{timestamp: true}
)

module.exports = mongoose.model("Burger", BurgersSchema);