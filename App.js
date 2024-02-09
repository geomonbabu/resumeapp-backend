const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const studrouter = require("./controllers/StudRouter")

//alias name
const student=express()

//middleware
student.use(express.json())
student.use(cors())
mongoose.connect("mongodb+srv://megeomonbabu:geo12345@cluster0.i1dx7ax.mongodb.net/studentdb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

//routing or api
student.use("/api/stud",studrouter)

student.listen(3001,()=>{
    console.log("server is running")
})