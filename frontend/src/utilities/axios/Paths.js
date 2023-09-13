import axios from 'axios';
import ValidateData from '../validator/validate';
// import {object_encrypter} from "object-encrypter";
import { Navigate, useNavigate } from "react-router-dom";

// import { Navigate, useNavigate } from "react-router-dom"

// const BaseURL = "https://bot-binary-psychic-space-waddle-7qp6gr974vghr7p9-8000.preview.app.github.dev";
const BaseURL = "http://127.0.0.1:8000"

async function POSTsignup(data) {

    // console.log(data);

    const errors = ValidateData(data);
    console.log(errors)

    var hasSomething = false;

    if (errors.fname.length !== 0) {
        hasSomething = true;
    }
    else if (errors.mname.length !== 0) {
        hasSomething = true;
    }
    else if (errors.lname.length !== 0) {
        hasSomething = true;
    }
    else if (errors.phone.length !== 0) {
        hasSomething = true;
    }
    else if (errors.email.length !== 0) {
        hasSomething = true;
    }
    else if (errors.dob.length !== 0) {
        hasSomething = true;
    }
    else if (errors.username.length !== 0) {
        hasSomething = true;
    }
    else if (errors.password.length !== 0) {
        hasSomething = true;
    }
    else if (errors.cpassword.length !== 0) {
        hasSomething = true;
    }

    console.log("someting" + hasSomething);

    if (hasSomething === true) return errors;

    try {
        const res = await axios.post(`${BaseURL}/parent/signup`, data)
        console.log(res);

        Navigate('/otp')

        // 410 : email already exist
        // 411 : phone already exists
        // 400 : username already exist
        // 200 : perfect

        // return errors;
    }
    catch (err) {
        console.log(err)
        // return ( e );

        if (err.response.status === 410) {
            errors.email = "Email already exist";
        }
        else if (err.response.status === 411) {
            errors.phone = "Phone No. already exist";
        }
        else if (err.response.status === 400) {
            errors.username = "Username is taken. Please select diffrent one.";
        }
    }

    return errors
}

async function POSTotp(data) {
    try {
        const res = await axios.post(`${BaseURL}/otp_verification`, data)
        console.log(res);

        // 200 verified
        // 288 unverified
    }
    catch (err) {
        console.log(err)
        return 'OTP is wrong'
    }
}

async function POSTlogin(data) {

    console.log(data);

    const errors = {
        phone: ''
    };

    if (data.phone.length !== 10) {
        errors.phone = 'Phone no. must have 10 digits'
        return errors
    }

    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!re.test(data.phone)) {
        errors.phone = 'Phone no. is invalid.'
        return errors
    }

    console.log(errors)

    var hasSomething = false;

    if (errors.phone.length !== 0) {
        hasSomething = true;
    }

    console.log("someting : " + hasSomething);

    if (hasSomething === true) return errors;

    try {
        const res = await axios.post(`${BaseURL}/login`, data)
        console.log(res);

        // Navigate('')
        // Navigate('/Dashboard')
        // return;

        // 200 : perfect
        // 288 : wrong credentials
        // 404 : not found

        // return errors;
    }
    catch (err) {
        console.log(err)
        // return ( e );

        if (err.response.status === 404) {
            errors.phone = "phone No. not Registered.";
        }
        else if (err.response.status === 288) {
            errors.password = "Password is incorrect";
        }
    }

    return errors
}

async function POSTmpin(data) {

    console.log(data);
    // const engine = object_encrypter('PayProtect');
    // const data = await engine.encrypt(fdata);

    const errors = {
        mpin: ''
    };

    if (data.mpin.length !== 6) {
        errors.phone = 'M-Pin must have 6 digits'
        return errors
    }

    var re = /^\(?(\d{3})\)?[- ]?(\d{3})$/;
    if (!re.test(data.phone)) {
        errors.mpin = 'mpin is invalid.'
        return errors
    }

    console.log(errors)

    var hasSomething = false;

    if (errors.mpin.length !== 0) {
        hasSomething = true;
    }

    console.log("someting : " + hasSomething);

    if (hasSomething === true) return errors;

    try {
        const res = await axios.post(`${BaseURL}/register_mpin}`, data, {params: {id:data.id}})
        console.log(res);

        // Navigate('')
        // Navigate('/Dashboard')
        // return;

        // 200 : perfect
        // 288 : wrong credentials
        // 404 : not found

        // return errors;
    }
    catch (err) {
        console.log(err)
        // return ( e );

        if (err.response.status === 404) {
            errors.phone = "phone No. not Registered.";
        }
        else if (err.response.status === 288) {
            errors.password = "Password is incorrect";
        }
    }

    return errors
}



// merchant
async function MerchantPOSTsignup(data) {

    console.log(data);

    let errors = ValidateData(data);
    if(data.category.length === 0){
        errors = {
            ...errors,
            category : "Please select atleast one category."
        }
    }
    

    console.log(errors)

    var hasSomething = false;

    if (errors.fname.length !== 0) {
        hasSomething = true;
    }
    else if (errors.mname.length !== 0) {
        hasSomething = true;
    }
    else if (errors.lname.length !== 0) {
        hasSomething = true;
    }
    else if (errors.phone.length !== 0) {
        hasSomething = true;
    }
    else if (errors.email.length !== 0) {
        hasSomething = true;
    }
    else if (errors.category.length !== 0) {
        hasSomething = true;
    }
    else if (errors.username.length !== 0) {
        hasSomething = true;
    }
    else if (errors.password.length !== 0) {
        hasSomething = true;
    }
    else if (errors.cpassword.length !== 0) {
        hasSomething = true;
    }

    console.log("someting" + hasSomething);

    if (hasSomething === true) return errors;

    try {
        const res = await axios.post(`${BaseURL}/merchant/signup`, data)
        console.log(res);

        Navigate('/otp')

        // 410 : email already exist
        // 411 : phone already exists
        // 400 : username already exist
        // 200 : perfect

        // return errors;
    }
    catch (err) {
        console.log(err)
        // return ( e );

        if (err.response.status === 410) {
            errors.email = "Email already exist";
        }
        else if (err.response.status === 411) {
            errors.phone = "Phone No. already exist";
        }
        else if (err.response.status === 400) {
            errors.username = "Username is taken. Please select diffrent one.";
        }
    }

    return errors
}


async function MerchantPOSTlogin(data) {

    console.log(data);

    const errors = {
        phone: ''
    };

    if (data.phone.length !== 10) {
        errors.phone = 'Phone no. must have 10 digits'
        return errors
    }

    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!re.test(data.phone)) {
        errors.phone = 'Phone no. is invalid.'
        return errors
    }

    console.log(errors)

    var hasSomething = false;

    if (errors.phone.length !== 0) {
        hasSomething = true;
    }

    console.log("someting : " + hasSomething);

    if (hasSomething === true) return errors;

    try {
        const res = await axios.post(`${BaseURL}/login`, data)
        console.log(res);

        // Navigate('')
        // Navigate('/Dashboard')
        // return;

        // 200 : perfect
        // 288 : wrong credentials
        // 404 : not found

        // return errors;
    }
    catch (err) {
        console.log(err)
        // return ( e );

        if (err.response.status === 404) {
            errors.phone = "phone No. not Registered.";
        }
        else if (err.response.status === 288) {
            errors.password = "Password is incorrect";
        }
    }

    return errors
}


export { POSTsignup, POSTotp, POSTlogin, POSTmpin, MerchantPOSTsignup, MerchantPOSTlogin }