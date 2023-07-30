import React, { useState } from 'react'
import './signup.css'
// import { useNavigate } from 'react-router-dom';
import { POSTsignup } from '../../../utilities/axios/Paths';

const Signup = () => {

    const [currOTP, setCurrOTP] = useState();

    console.log(currOTP)

    function handleChange(event) {
        setCurrOTP(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const Loggedin = await POSTsignup(currOTP);

        console.log(Loggedin)
    }

    return (
        <div className="signup">


            <div className="form">
                <h1>Verify OTP</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={currOTP.fname}
                            name='fname'
                            onChange={handleChange}
                            placeholder='First Name'
                        />
                        <br></br>
                    </div>

                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    )

}

export default Signup