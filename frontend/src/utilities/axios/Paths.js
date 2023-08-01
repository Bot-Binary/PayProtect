import axios from 'axios';
import ValidateData from '../validator/validate';
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

async function POSTotp(data){
    try {
        const res = await axios.post(`${BaseURL}/otp`, data)
        console.log(res);

        // 200 verified
        // 288 unverified
    }
    catch (err) {
        console.log(err)
        return 'OTP is wrong'
    }
}


export {POSTsignup, POSTotp}