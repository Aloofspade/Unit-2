const mongoose = require('mongoose')

const BurgersSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      burger: {
        type: String,
        required: true,
        trim: true,
      },
      flavor: {
        type: String,
        required: true,
        trim: true,
      },
      remove: [
        {
          type: String,
          required: true,
          trim: true,
        },
      ],
      imagePath: {
        type: String,
        required: true,
        trim: true,
      },
    
},
{timestamp: true}
)

module.exports = mongoose.model("Burger", BurgersSchema);