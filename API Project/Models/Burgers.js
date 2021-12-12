const mongoose = require('mongoose')

const BurgersSchema =  new mongoose.Schema({
    name: {
      type:  String,
      required: [true, "name must be provided"],
      maxlength: 50
      },
      burger: {
        type:  String,
        required: [true, "Burger must be provided"],
        maxlength: 50
      },
      flavor: {
        type:  String,
        required: [true, "Flavor name must be provided"],
        maxlength: 50
      },
      remove: {
        type:  String,
        default: false,
        maxlength: 50
        
      }
      
    
},
{timestamp: true}
)

module.exports = mongoose.model("Burger", BurgersSchema);