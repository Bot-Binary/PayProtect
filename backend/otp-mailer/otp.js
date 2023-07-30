const fast2sms = require("fast-two-sms");
const random = require("randomstring");


require("dotenv").config();

const otp = (async (req,res)=>{
    const phone = req.body.phone;
    const name = req.body.name;
    console.log(phone);
    const otp = random.generate({
        length : 6,
        charset : 'numeric'
    })
    console.log(otp);
    const otp1 = await fast2sms.sendMessage({authorization :"wNItu8SF0JmabovXy6TRUpzCKLVGMk19cxHdWPiD4E7Ol3QqfnAPqyk4GduSDzTaC68UNiRxb9JI0EWf",message:`Hello ${name} Here is Your OTP ${otp}`,numbers:[phone]})
        .then((res)=>{
            console.log("OTP sent SuccesFully");
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });

    const ans = {
        "response" : otp1,
        "otp" : otp
    }
    res.send(ans);
})

module.exports = otp;