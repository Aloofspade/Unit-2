const mongoose = require('mongoose')

const BurgersSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      Price: {
        type: String,
        required: true
    },
      brand: {
        type: String,
        required: true,
        trim: true,
      },
      flavor: {
        type: String,
        required: true,
        trim: true,
      },
      ingredients: [
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