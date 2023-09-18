const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');


// models
const child = require("../models/registration/child");
const parent = require("../models/registration/parents");
const merchant = require("../models/registration/merchant");



// otp-mailer
const otp = require("../otp-mailer/otp");




const merchant_signup = async (req, res) => {
    const data = req.body;
    // const phone = req.body.phone;
    // const email = req.body.email;

    const already_exist_phone_p = await parent.findOne({ phone: req.body.phone });
    const already_exist_email_p = await parent.findOne({ email: req.body.email });
    const already_exist_phone_c = await child.findOne({ phone: req.body.phone });
    const already_exist_email_c = await child.findOne({ email: req.body.email });

    // console.log(already_exist_email_p);
    // console.log(already_exist_phone_p);
    // console.log(already_exist_email_c);
    // console.log(already_exist_phone_c);



    if (already_exist_phone_p != null || already_exist_email_p != null || already_exist_phone_c != null || already_exist_email_c != null) {
        res.status(399).send("Alredy Exist");
    }
    else {

        console.log(data);

        const new_merchant = new merchant({
            id: uuidv4() + "M",
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            phone: data.phone,
            email: data.email,
            // /////////////////////
            category : data.category,
            // /////////////////////
            password: data.password,
            username: data.username,
            payid: `${data.username}@PayProtect`,

        })

        try {
            const save = await new_merchant.save()
                .then(async () => {
                    const x = await merchant.find({ phone: data.phone });
                    console.log("SAVED");
                    res.status(200).send(x);
                }).catch((e) => {
                    console.log("THIS IS ERROR FROM merchant_signup.js file");
                    console.log(e);
                    const err = e.keyPattern;
                    // console.log(err);
                    if (err.hasOwnProperty('email') == true && err.email == 1) {
                        res.status(410).send();
                    }
                    else if (err.hasOwnProperty('phone') == true && err.phone == 1) {
                        res.status(411).send();
                    }
                    else if (err.hasOwnProperty('username') == true && err.username == 1) {
                        res.status(412).send();
                    }
                    else {
                        res.status(413).send("Bad Request");
                    }
                })
        } catch (error) {
            console.log("THIS IS ERROR FROM merchant_signup.js -> save");
            console.log(error);
        }

        try {
            otp(data.phone,data.name);
        } catch (error) {
            console.log("This is the error from merchant_signup.js -> otp block")
            console.log(error);
        }

    }

    // console.log()

}
// )


module.exports = merchant_signup;