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
    origin:"http://127.0.0.1:3000",
    // credentials:true
}))


// DB connection
require("./db/connect");


// DB Models
const parent = require("./models/registration/parents");
const wallet = require("./models/wallet/wallet");
const child = require("./models/registration/child");



// ROutes Functions

const parent_signup = require("./db_functions/parent_signup");

// const otp_function = require("./otp-mailer/otp");

const otp_verification_function = require("./db_functions/otp_verification");

const child_signup = require("./db_functions/child_signup");

const login = require("./general_functions/login");











// temp functions

const dlt = require("./dlt");






app.post("/parent/signup",parent_signup);

// app.post("/otp",otp_function);

app.post("/otp_verification",otp_verification_function);

app.post("/child/signup",child_signup);

app.post("/login",login);

// app.post("/dlt",dlt);











app.listen(8000,()=>{
    console.log("Listening on 8000");
})