import React, { useState } from 'react'
import '../Signup/signup.css'
import { POSTmpin } from '../../../utilities/axios/Paths';
import { checkIfAllValuesAreEmpty } from '../../../utilities/axios/extrafns';
import OtpVerification from '../Signup/Otp';

const Mpin = params => {

    // const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            id: '21e19a69-f665-4860-ab61-071f7892fa7bP',
            mpin: '',
            password: '',
            type: "P"
        }
    )

    // const [mpin, setMpin] = useState('');

    const [errors, setErrors] = useState(
        {
            mpin: '',
            password: ''
        }
    )

    // console.log(formData)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const tmp = await POSTmpin(formData);

        setErrors(tmp);
        const isempty = checkIfAllValuesAreEmpty(tmp)
        
        // Navigate('/dashboard')

        
    }

    return (
        <div>
            {/* {!otpSent ? ( */}
                < div className="signup" >
                    <div className="form">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="number"
                                    value={formData.mpin}
                                    name='mpin'
                                    onChange={handleChange}
                                    placeholder='M-Pin'
                                />
                                {errors.mpin && <p className="errors">{errors.mpin}</p>}
                            </div>
                            <div>
                                <input
                                    type="password"
                                    value={formData.password}
                                    name='password'
                                    onChange={handleChange}
                                    placeholder='Password'
                                />
                                {errors.password && <p className="errors">{errors.password}</p>}
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div >
            {/* ) : <OtpVerification  */}
            {/* } */}
        </div>
    )
}

export default Mpin