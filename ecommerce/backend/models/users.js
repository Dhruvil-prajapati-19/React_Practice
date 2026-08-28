const mongoose = require('mongoose')
const addressSchema = require("./address");

var usersSchema = mongoose.Schema({
    first_name: {type:String,required:true,maxlength: 250},
    last_name: {type:String,required:true,maxlength: 250},
    email:{type: String,required: true,unique: true},
    gender:{type:String,enum:["male", "female", "other"]},
    phone_number:{type:Number,required:true,unique:true},
    address:{type:addressSchema,required:true},
    passoword: {type:String,required:true,maxlength:150},
})

