const mongoose  = require("mongoose");
const bcrypt = require("bcryptjs");


// DB model
const otp = require("../models/verification/otp");


const otp_verification = (async(req,res)=>{
    const phone = `+91${req.body.phone}`;
    const otp_number = req.body.otp;

    

    const data = await otp.findOne({phone:phone});
    const hashed_otp = data.otp;

    const match = await bcrypt.compare(otp_number,hashed_otp);
    if(match){
        res.status(200).send();
    }
    else{
        res.status(288).send();
    }

})

module.exports = otp_verification;