const mongoose  = require("mongoose");
const bcrypt = require("bcryptjs");

// DB model
const otp = require("../models/verification/otp");


const otp_verification = (async(req,res)=>{
    const phone = req.body.phone;
    const otp = req.body.otp;

    const data = otp.findOne({phone:phone});

    // const 

})