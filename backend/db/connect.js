const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/PayProtect",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connected To MONGO-DB");
}).catch((err)=>{
    console.log("ERROR FROM connect.js")
    console.log(err);
})