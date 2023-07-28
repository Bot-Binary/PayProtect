const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const random = require("randomstring");


// models
const parent = require("../models/registration/parent");



app.post("/parent/signup",async (req,res)=>{
    const data = req.body;

    const new_parent = new parent({
        id:random.generate({
            length:9,
            charset: 'alphanumeric'
        })+'P',
        
    })


})  