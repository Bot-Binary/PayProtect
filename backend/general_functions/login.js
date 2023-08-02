const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// models
const parent = require("../models/registration/parents");
const child = require("../models/registration/child");


const login = (async (req,res)=>{
    const data = req.body;
    const type = data.type;
    const phone = data.phone;
    const password = data.password;
    if(type == 'P'){
        const obj = await parent.findOne({phone:phone});
        if(obj == null){
            res.status(404).send();
        }
        const real_password = obj.password;
        const password_match = await bcrypt.compare(password,real_password);
        if(password_match == true){
            res.status(200).send(obj);
        }
        else{
            res.status(211).send();
        }
    }
    else{
        const obj = await child.findOne({phone:phone});
        if(obj == null){
            res.status(404).send();
        }
        const real_password = obj.password;
        const password_match = await bcrypt.compare(password,real_password);
        if(password_match == true){
            res.status(200).send(obj);
        }
        else{
            res.status(211).send();
        }
    }
})

module.exports = login;