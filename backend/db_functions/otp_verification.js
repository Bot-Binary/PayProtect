const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// DB model
const otp = require("../models/verification/otp");
const parent = require("../models/registration/parents");
const child = require("../models/registration/child");



const otp_verification = (async (req, res) => {
    const phone_ = req.body.phone;
    const phone = `+91${phone_}`;
    const otp_number = req.body.otp;

    const data = await otp.findOne({ phone: phone });
    const hashed_otp = data.otp;

    const match = await bcrypt.compare(otp_number, hashed_otp);
    if (match) {
        res.status(200).send();
    }
    else {

        try {
            const dlt = await parent.deleteOne({ phone: phone_ });
            const dlt_count = dlt.deletedCount;
            if (dlt_count == 0) {
                const dlt = await child.deleteOne({ phone: phone_ });
            }
        } catch (error) {
            console.log("This is error from otp_verification.js -> delete part");
            console.log(error);
        }


        res.status(288).send();
    }

})

module.exports = otp_verification;