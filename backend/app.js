const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
// const dotenv = require('dotenv');


// ENV
require("dotenv").config();

// DOTENV set krvani baki 6.......OTP verification authorization key mate





const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin:"https://jaysanghani08-redesigned-space-halibut-pq9pqw9v9q52xvq-3000.preview.app.github.dev",
    // credentials:true
}))


// DB connection
require("./db/connect");


// DB Models
const parent = require("./models/registration/parents");
const wallet = require("./models/wallet/wallet");



// ROutes Functions

const parent_signup = require("./db_functions/parent_signup");

const otp_function = require("./otp-mailer/otp");





app.post("/parent/signup",parent_signup);

app.post("/parent/otp",otp_function);

app.post("/parent/otp_verification",otp_verification_function);


app.post("/home",(req,res)=>{
    console.log("HHHHHHHHHHHH");
})









app.listen(8000,()=>{
    console.log("Listening on 8000");
})