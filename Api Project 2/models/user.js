const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide a name"],
        maxlength: 50,
        minlength: 3
    }, 
    email: {
        type:  String,
        required: [true, "must provide an email"],
        match: [
         /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
         "Must provide a valid email"
        ],
        maxlength: 50,
        minlength: 3,
        unique: true,
        lowercase: true
    },
    password: {
        type:  String,
        required: [true,"must provide an password"],
        minlength: 6
    },
    description: {
        type:  String,
        maxlength: 50
    }
})

UserSchema.pre("save", async function (next) {
this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
next()
});

UserSchema.methods.createJWT = function () {
    return jwt.sign(
        {userID: this._id, name: this.name},
        process.env.JWT_SECRET, 
        {
            expiresIn: '30d'
        }
    )
}

UserSchema.methods.comparePassword = async function (submitPassword) {
    const isMatch = await bcrypt.compare(submitPassword, this.password);

    return isMatch;
}

module.exports = mongoose.model("User", UserSchema);