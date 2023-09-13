const { configDotenv } = require('dotenv');
const nodemailer = require('nodemailer');



require('dotenv').config();



let mailDetails = {
    from: 'PayProtect',
    to: '',
    subject: '',
    text: ''
};




const mailer = ((name,mail,reason,amount,categoty)=>{
    mailDetails={
        this.to = mail,
    }
    if(reason == "approved"){
        mailDetails={
            this.subject="Payment by your son",
            this.
        }
    }
})









const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    service : 'gmail',
    port:'587',
    secure:'false', 
    auth: {
        user: process.env.MAIL,
        pass: process.env.PSWD
    }
});
 


 
const s = mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
        console.log(err);
    } else {
        console.log('Email sent successfully');
    }
});

module.exports = s;
