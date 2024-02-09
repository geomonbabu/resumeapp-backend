const mongoose = require("mongoose")

const ResumeSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"student"
        },
        objective:{
            type:String,
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        contactnumber:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        },
        Hobbies:{
            type:String,
            required:true
        },
    }
)
module.exports = mongoose.model("resume",ResumeSchema)