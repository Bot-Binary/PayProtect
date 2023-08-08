const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const object_encrypter = require("object-encrypter");


// DB models
const parent = require("../models/registration/parents");
const child = require("../models/registration/child");
const wallet = require("../models/wallet/wallet");

const mpin = (async (req,res)=>{
    const encrypted = req.body.str;
    const id = req.params;
    const data = object_encrypter.decrypt(encrypted);
    const mpin = data.mpin;
    const password = data.password;

    if(type == "P"){
        const obj = await parent.findOne({id:id});
        const hashed_password = obj.password;
        const matched = await bcrypt.compare(password,hashed_password);
        if(matched){
            const wallet_obj = new wallet({
                id : id,
                balance : 0,
                mpin : mpin
            })

            const saved = await wallet_obj.save()
                .then(async ()=>{
                    const x = await wallet.find({ id: id });
                    console.log("SAVED");
                    res.status(200).send(x);
                })
                .catch((e)=>{
                    console.log("This is error from general functions -> register_mpin.js");
                    console.log(e);
                })
        }
    }
    else{
        const obj = await child.findOne({id:id});
        const hashed_password = obj.password;
        const matched = await bcrypt.compare(password,hashed_password);
        if(matched){
            const wallet_obj = new wallet({
                id : id,
                balance : 0,
                mpin : mpin
            })

            const saved = await wallet_obj.save()
                .then(async ()=>{
                    const x = await wallet.find({ id: id });
                    console.log("SAVED");
                    res.status(200).send(x);
                })
                .catch((e)=>{
                    console.log("This is error from general functions -> register_mpin.js");
                    console.log(e);
                })
        }
    }

})


module.exports = mpin;

