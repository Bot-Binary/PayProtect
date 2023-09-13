// src/OtpVerification.js
import React, { useState } from 'react';
import './otp.css'
import { POSTotp } from '../../../utilities/axios/Paths';

const OtpVerification = (phone) => {
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const [errors, setErrors] = useState('')

    const handleVerify = async (e) => {

        e.preventDefault()

        if (otp.length !== 6) {
            setErrors('OTP must be of 6 charactors')
            return
        }
        else {
            const data = {
                phone: phone,
                otp: otp
            }

            const tmp = await POSTotp(data);
            console.log(tmp)

            setErrors(tmp);
        }
    };



    return (

        <form className="otpform" onSubmit={handleVerify}>
            <label>
                Enter OTP:
                <br></br>
                <br></br>
                <input type="text" name="otp" value={otp} onChange={handleChange} />
                {errors && <p className="errors">{errors}</p>}
            </label>
            <button type="submit">Verify OTP</button>
        </form>
    );
};

export default OtpVerification;
