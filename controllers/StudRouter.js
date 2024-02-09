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
router.post("/login",async(req,res)=>{
    let data=req.body
    let email = req.body.emailid
    let input = await studmodel.findOne({"emailid": email})
    if(!input){
        return res.json({
            status:"invalid email"
        })
    }
    else {
        console.log(input)
        let dbPass=input.password
        let orgPass=req.body.password
        console.log(dbPass)
        console.log(orgPass)
        const match = await bcrypt.compare(orgPass,dbPass)
        if(!match)
        {
            return res.json({
                status:"incorrect password"
            })
        }
        else {
            res.json({
                status:"success"
            })
        }
    }
    console.log(email)
    console.log(pass)
})
module.exports=router

