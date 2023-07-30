const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
// const dotenv = require('dotenv');


// ENV
require("dotenv").config();




const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:3000",
    credentials:true
}))


// DB connection
require("./db/connect");


// DB Models
const parent = require("./models/registration/parents");
const wallet = require("./models/wallet/wallet");



// ROutes Functions

const parent_signup = require("./db_functions/parent_signup");

const otp = require("./otp-mailer/otp");





app.post("/parent/signup",parent_signup);

app.post("/parent/otp",otp);

app.post("/home",(req,res)=>{
    console.log("HHHHHHHHHHHH");
})









app.listen(8000,()=>{
    console.log("Listening on 8000");
})