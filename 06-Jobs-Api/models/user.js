const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
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
        match: [
         /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
         "Must provide a valid email"
        ],
        maxLength: 50,
        minLength: 3,
        unique: true
    },
    password: {
        type:  String,
        required: [true,"must provide an password"],
        minLength: [6, "password must be at least 6 characters"]
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
            expires: '30d'
        }
    )
}

UserSchema.methods.comparePassword = async function (submitPassword) {
    const isMatch = await bcrypt.compare(submitPassword, this.password);

    return isMatch;
}

module.exports = mongoose.model("User", UserSchema);