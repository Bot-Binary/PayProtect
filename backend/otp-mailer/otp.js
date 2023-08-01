const fast2sms = require("fast-two-sms");
const random = require("randomstring");
const axios = require('axios');

const otp = require("../models/verification/otp");
const { response } = require("express");


require("dotenv").config();

const otp_function = (async (req,res)=>{
    const phone = `+91${req.body.phone}`;
    const name = req.body.name;
    console.log(phone);
    const otp_number = random.generate({
        length : 6,
        charset : 'numeric'
    })

    const options = {
    method: 'POST',
    url: 'https://clicksend.p.rapidapi.com/sms/send',
    headers: {
        'content-type': 'application/json',
        Authorization: 'Basic MjAyMTAxNDY0QGRhaWljdC5hYy5pbjpBYmMxMjNAIyQ=',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'd19c51521amsh30a2f46a2a67ffbp10da37jsn0b95175f627a',
        'X-RapidAPI-Host': 'clicksend.p.rapidapi.com'
    },
    data: {
        messages: [
        {
            source: 'mashape',
            from: 'Test',
            body: `Hello ${name} Here is Your OTP ${otp_number}`,
            to: phone,
            schedule: '1452244637',
            custom_string: `Hello ${name} Here is Your OTP ${otp_number}`
        }
        ]
    }
    };

    try {
        // const response = await axios.request(options);
        // return response;

        const already = await otp.findOne({phone:phone});
        console.log(already);
        if(already){
            const dlt = await otp.deleteOne({phone:phone});
            console.log(dlt);
        }  

        console.log(otp_number);


        const otp_obj = new otp({
            otp : otp_number,
            phone : phone,
        })
        const save = await otp_obj.save();
        console.log(save);
        // const res_code = response.data.http_code;

        // res.status(res_status).send();

        // console.log(response);
        console.log("YYY");
    } catch (error) {
        res.status(299).send();
        // Jay pase set karavanu 6
        console.error(error);
    }




})

module.exports = otp_function;