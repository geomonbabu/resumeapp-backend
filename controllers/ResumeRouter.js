const express = require("express")
const router = express.Router()
const resumemodel = require("../models/ResumeModel")

router.post("/addetails",async(req,res)=>{
    let data = req.body
    let posts = new resumemodel(data)
    let result = await posts.save()
    res.json({
        status:"success"
    })
})
router.get("/viewpost",async(req,res)=>{
    let output = await resumemodel.find()
    .populate("userId","name emailid -_id")//display name and emailid instead of user id
    .exec()
    res.json({
        output
    })
})
module.exports=router