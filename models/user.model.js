const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    password: String,
    email : String,
    name : String
})

const UserModel = mongoose.model("users",UserSchema)
 
module.exports = UserModel