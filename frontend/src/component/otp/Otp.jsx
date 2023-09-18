// src/OtpVerification.js
import React, { useState } from 'react';
import './otp.css'
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import { sentOtpFunction } from '../../utilities/axios/Apis';

const OtpVerification = (phone) => {
    const [otp, setOtp] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location.state)

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    console.log(otp);

    const handleVerify = async (e) => {

        e.preventDefault()
        

        if (otp === "") {
            toast.error("Enter Your Otp")
        } else if (!/[^a-zA-Z]/.test(otp)) {
            toast.error("Enter Valid Otp")
        } else if (otp.length < 6) {
            toast.error("Otp Length minimum 6 digit")
        } else {
            const data = {
                otp : otp, 
                phone : location.state.phone
            }

            // console.log(data)

            const response = await sentOtpFunction(data);
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem("userdbtoken", response.data.userToken);
                toast.success("Registered succesfully");
                setTimeout(() => {
                    navigate("/merchant/dashboard", )
                }, 2000)
            } else {
                toast.error("response.response.data.error")
            }
        }
    };



    return (
        <>
            <form className="otpform" onSubmit={handleVerify}>
                <label>
                    Enter OTP:
                    <br></br>
                    <br></br>
                    <input type="text" name="otp" value={otp} onChange={handleChange} />
                </label>
                <button type="submit">Verify OTP</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default OtpVerification;
