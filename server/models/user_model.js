const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    accessToken: {type: String, default: null},
    verificationToken: {type: String, default: null},
    verify: {type: Boolean, default: false}
},{versionKey: false})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;