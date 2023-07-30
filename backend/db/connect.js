const mongoose = require("mongoose");
const express = require("express");

mongoose.set('strictQuery', false);

// mongodb://localhost:27017/
mongoose.connect("mongodb://127.0.0.1:27017/PayProtect",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
    // useCreateIndex:true
}).then(()=>{
    console.log("Connected To MONGO-DB");
}).catch((err)=>{
    console.log("ERROR FROM connect.js")
    console.log(err);
})

