const mongoose = require("mongoose");
const object_encrypter = require("object-encrypter");
var engine = object_encrypter('PayProtect');


// db model
// const parent = require("./models/registration/parents");


const dlt = (async ()=>{
    const obj = {
        "mpin":"123456",
        "password":"shubham464",
        "type":"P"
    }
    const str = await engine.encrypt(obj);
    console.log(str);
})()


// module.exports = dlt;