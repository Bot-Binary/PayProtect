const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const random = require("randomstring");


// models
const parent = require("../models/registration/parents");



// app.post("/parent/signup",
const parent_signup = async (req, res) => {
    const data = req.body;
    console.log(data);

    const new_parent = new parent({
        id: random.generate({
            length: 9,
            // charset: 'alphanumeric'
        })+"P",
        fname: data.fname,
        mname: data.mname,
        lname: data.lname,
        phone: data.phone,
        email: data.email,
        dob: data.dob,
        password : data.password,
        username: data.username,
        payid: `${data.username}@PayProtect`,

    })

    const save = await new_parent.save()
        .then(async () => {
            const x = await parent.find({ phone: data.phone });
            // console.log("SAVED");
            res.send(x);
        }).catch((e) => {
            console.log("THIS IS ERROR FROM parent_signup.js file");
            console.log(e);
        })

}
// )


module.exports = parent_signup;