const { configDotenv } = require('dotenv');
const nodemailer = require('nodemailer');



require('dotenv').config();



let mailDetails = {
    from: 'PayProtect',
    to: '',
    subject: '',
    text: '',
    html:mail.html
};


// zsdfaertg

const mailer = ((name,mail,reason,amount,categoty,shop,father_name)=>{
    mailDetails.to = email;
    if(reason == "approved"){
        mailDetails.subject="Payment by your son";;
    }

    if(reason == "denied"){
        mailDetails.subject="Unappropriate Payment By your Child"
    }

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
})

module.exports = mailer;
