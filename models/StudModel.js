const mongoose = require("mongoose")

const StudSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        emailid:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },   
    }
)
module.exports = mongoose.model("student",StudSchema)