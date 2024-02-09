const express = require("express")
const router = express.Router()
const studmodel = require("../models/StudModel")
const bcrypt = require("bcryptjs")

HashGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/register",async(req,res)=>{
    let {data} = {"data":req.body}
    let password = data.password
    const hashedPassword = await HashGenerator(password)
    data.password=hashedPassword
    let stud = new studmodel(data)
        let result = stud.save()
        res.json({
            status:"success"
        })
})
module.exports=router

