const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');



// models
const parent = require("../models/registration/parents");
const child = require("../models/registration/child");



// otp-mailer
const otp = require("../otp-mailer/otp");



// app.post("/parent/signup",
const parent_signup = async (req, res) => {
    const data = req.body;
    // const phone = req.body.phone;
    // const email = req.body.email;

    const already_exist_phone = await child.findOne({ phone: req.body.phone });
    const already_exist_email = await child.findOne({ email: req.body.email });


    if (already_exist_email || already_exist_phone) {
        res.status(399).send("Already Exist");
    }

    else {

        console.log(data);

        const new_parent = new parent({
            id: uuidv4() + "P",
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
    

    const save = await new_parent.save()
        .then(async () => {
            const x = await parent.find({ phone: data.phone });
            console.log("SAVED");
            res.status(200).send(x);
        }).catch((e) => {
            console.log("THIS IS ERROR FROM parent_signup.js file");
            console.log(e);
            const err = e.keyPattern;
            // console.log(err);
            if(err.hasOwnProperty('email')==true && err.email==1){
                res.status(410).send();
            }
            else if(err.hasOwnProperty('phone') ==true && err.phone==1){
                res.status(411).send();
            }
            else if(err.hasOwnProperty('username')==true  && err.username==1){
                res.status(412).send();
            }

            res.status(413).send("Bad Request");

    })

        } catch (error) {
            console.log("THIS IS ERROR FROM parent_signup.js");
            console.log(error);
        }
    }



    // console.log()

}
// )


module.exports = parent_signup;