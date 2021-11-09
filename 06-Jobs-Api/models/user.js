const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide a name"],
        minlength: [3, "name must be at least 3 characters"],
        maxLength: [50, "name must be less then 50 characters"]
    }, 
    email: {
        type:  String,
        required: [true, "must provide an email"],
        re: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    },
    password: {
        type:  String,
        required: [true,"must provide an password"],
        minLength: [6, "password must be at least 6 characters"]
    }
})