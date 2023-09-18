const mongoose = require("mongoose");
const object_encrypter = require("object-encrypter");
var engine = object_encrypter('PayProtect');


// db model
// const parent = require("./models/registration/parents");

const mailer = require("./otp-mailer/mailer");


const dlt = (async (req,res)=>{
    mailer("Shubham","shubhampatel13495@gmail.com","approved","5676","Medical","Radhe Pharmacy","RohitBhai","04-11-2003");
})


module.exports = dlt;