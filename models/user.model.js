const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
name:{
    type:String,
    required: true
},
userId:{
    type:String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true,
    minlength:6
},
email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    isEmail: true,
},
createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
},
updatedAt: {
    type: Date,
    default: () => Date.now()
},



})

module.exports = mongoose.model("User",userSchema)