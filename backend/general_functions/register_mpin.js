// Update mpin atrribute in main registration

const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const object_encrypter = require("object-encrypter");
var engine = object_encrypter('PayProtect');


// DB models
const parent = require("../models/registration/parents");
const merchant = require("../models/registration/merchant");
const child = require("../models/registration/child");
const wallet = require("../models/wallet/wallet");



const mpin = (async (req,res)=>{


    const encrypted = req.body.str;
    const id = req.query.id;
    
    // const data = await engine.decrypt(encrypted);
    const data = req.body;
    
    const mpin = data.mpin;
    const password = data.password;
    const type = data.type;

    if(type == "P"){
        // const obj = await parent.findOne({id:id});
        const obj = await parent.findOneAndUpdate({id:id},{$set:{mpin:true}});
        console.log(obj);
        const hashed_password = obj.password;
        const matched = await bcrypt.compare(password,hashed_password);
        if(matched){
            const wallet_obj = new wallet({
                id : id,
                mpin : mpin
            })
    
            const saved = await wallet_obj.save()
                .then(async ()=>{
                    const x = await wallet.findOne({ id: id });
                    console.log("SAVED");
                    res.status(200).send(x);
                })
                .catch((e)=>{
                    console.log("This is error from general functions -> register_mpin.js");
                    console.log(e);
                    res.status(212).send("There is some error");
                })
        }
        else{
            // Needs to give to sanghani for wrong password
            res.status(222).send();
        }
    }

    else if(type == 'M'){
        const obj = await merchant.findOneAndUpdate({id:id},{$set:{mpin:true}});
        console.log(obj);
        const hashed_password = obj.password;
        const matched = await bcrypt.compare(password,hashed_password);
        if(matched){
            const wallet_obj = new wallet({
                id : id,
                mpin : mpin
            })
    
            const saved = await wallet_obj.save()
                .then(async ()=>{
                    const x = await wallet.findOne({ id: id });
                    console.log("SAVED");
                    res.status(200).send(x);
                })
                .catch((e)=>{
                    console.log("This is error from general functions -> register_mpin.js");
                    console.log(e);
                    res.status(212).send("There is some error");
                })
        }
        else{
            // Needs to give to sanghani for wrong password
            res.status(222).send();
        }
    }


    else{
        // const obj = await child.findOne({id:id});
        const obj = await child.findOneAndUpdate({id:id},{$set:{mpin:true}});
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
                    res.status(212).send("There is some error");
                })
        }
        else{
            // Needs to give to sanghani for wrong password
            res.status(222).send();
        }
    }

})


module.exports = mpin;

