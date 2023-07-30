import axios from 'axios';
// import { Navigate, useNavigate } from "react-router-dom"

const BaseURL = "http://localhost:8000";

export async function POSTsignup(data) {
    try {
        // console.log(data);

        // const errors = await registerValidation(data);

        const res = await axios.post(`${BaseURL}/parent/signup`, data)
        console.log(res);
        // if (res.data === "EMAIL") {
        //     console.log("Email already exist");
        //     return false;
        // }
        // else if (res.data == "PHONE") {
        //     console.log("Phone No. already exist");
        //     return false;
        // }
        // else {
        //     toast.success("Logged in Successfully.")
        //     console.log(res.data);
        //     return res.data;
        // }
    }
    catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}