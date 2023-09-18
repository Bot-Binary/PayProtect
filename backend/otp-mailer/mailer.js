const { configDotenv } = require('dotenv');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')



require('dotenv').config();



const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    service : 'gmail',
    port:'587',
    // secure:'true', 
    auth: {
        user: process.env.MAIL,
        pass: process.env.PSWD
    }
});



mailTransporter.verify((error, success) => {
    if (error) console.log(error);
    console.log("Server is ready to take our messages");
});

mailTransporter.use('compile', hbs({
    viewEngine: {
        extname: '.hbs',
        layoutsDir: './otp-mailer/',
        defaultLayout: false,
        partialsDir: './otp-mailer/',
    }, viewPath: './otp-mailer/', extName: '.hbs'
}));



// let mailDetails = {
//     from: 'PayProtect',
//     to: '',
//     subject: '',
//     template: 'product_confirmation_template',
//     context: {
//         name: 'Anonymous Coder', products: products,
//     }
// };



const mailer = (async (name,mail,reason,amount,category,shop,father_name,date)=>{
    
    const data = {
        name : name,
        amount : amount,
        date : date,
        msg : ""   
    }


    let mailDetails = {
        from: 'PayProtect',
        to: mail,
        subject: '',
        template: 'mail',
        context: {
            demo:data,
        }
    };

    // mailDetails.to = mail;
    if(reason == "approved"){

        mailDetails.subject=`Succesful Payment by ${name}`;

        // const data = {
        //     name : name,
        //     amount : amount,
        //     date : date,
        //     msg : ""   
        // }
        data.msg = `This the mail regarding a payment done by ${name} at ${shop} which fall under the category ${category}`   

        mailDetails.context.demo=data;
    }

    else if(reason == "denied"){

        mailDetails.subject=`Unappropriate try of Payment By ${name}`;

        // const data = {
        //     name : name,
        //     amount : amount,
        //     date : date,
        //     msg : `This the mail regarding a unappropriate try for payment done by ${name} at ${shop} which fall under the category ${category}`   
        // }
        data.msg = `This the mail regarding a unappropriate try for payment done by ${name} at ${shop} which fall under the category ${category}`   
            
        mailDetails.context.demo=data;
    }

     
    const s = await mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
    // console.log("oooo");
})

module.exports = mailer;
