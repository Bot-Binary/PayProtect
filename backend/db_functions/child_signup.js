const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');


// models
const child = require("../models/registration/child");
const parent = require("../models/registration/parents");



// otp-mailer
const otp = require("../otp-mailer/otp");




const child_signup = async (req, res) => {
    const data = req.body;
    // const phone = req.body.phone;
    // const email = req.body.email;

    const already_exist_phone = await parent.findOne({ phone: req.body.phone });
    const already_exist_email = await parent.findOne({ email: req.body.email });

    console.log(already_exist_email);
    console.log(already_exist_phone);



    if (already_exist_phone != null || already_exist_email != null) {
        res.status(399).send("Alredy Exist");
    }
    else {

        console.log(data);

        const new_child = new child({
            id: uuidv4() + "C",
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            phone: data.phone,
            email: data.email,
            dob: data.dob,
            password: data.password,
            username: data.username,
            payid: `${data.username}@PayProtect`,

        })

        try {
            const save = await new_child.save()
                .then(async () => {
                    const x = await child.find({ phone: data.phone });
                    console.log("SAVED");
                    res.status(200).send(x);
                }).catch((e) => {
                    console.log("THIS IS ERROR FROM child_signup.js file");
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
            console.log("THIS IS ERROR FROM child_signup.js");
            console.log(error);
        }

    }

    // console.log()

}
// )


module.exports = child_signup;