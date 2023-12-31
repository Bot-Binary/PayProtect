const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
// const dotenv = require('dotenv');


// ENV
require("dotenv").config();







const app = express();
app.use(cors({
    origin:"http://127.0.0.1:3000",
    // credentials:true
}))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// DB connection
require("./db/connect");


// DB Models
const parent = require("./models/registration/parents");
const wallet = require("./models/wallet/wallet");
const child = require("./models/registration/child");
const merchant = require("./models/registration/merchant");



// ROutes Functions

const parent_signup = require("./db_functions/parent_signup");

// const otp_function = require("./otp-mailer/otp");

const otp_verification_function = require("./db_functions/otp_verification");

const child_signup = require("./db_functions/child_signup");

const login = require("./general_functions/login");

const register_mpin = require("./general_functions/register_mpin");

const merchant_signup = require("./db_functions/merchant_signup");

// const mailer = require("./otp-mailer/mailer");









// temp functions

const dlt = require("./dlt");






app.post("/parent/signup",parent_signup);

// app.post("/otp",otp_function);

app.post("/otp_verification",otp_verification_function);

app.post("/child/signup",child_signup);

app.post("/login",login);

app.post("/dlt",dlt);

app.post("/register_mpin",register_mpin);

app.post("/merchant/signup",merchant_signup);

// app.post("/Mail",mailer());








app.listen(8000,()=>{
    console.log("Listening on 8000");
})