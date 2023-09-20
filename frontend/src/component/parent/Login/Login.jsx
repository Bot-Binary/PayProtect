import React, { useState } from 'react'
import '../Signup/signup.css'
import { POSTlogin } from '../../../utilities/axios/Paths';
// import { checkIfAllValuesAreEmpty } from '../../../utilities/axios/extrafns';
import OtpVerification from '../../otp/Otp';

const ParentLogin = params => {

    // const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            phone: '',
            password: '',
            type: "P"
        }
    )

    const [otpSent, setOtpSent] = useState(false);
    const [phone, setPhone] = useState('');

    const [errors, setErrors] = useState(
        {
            phone: '',
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

        const tmp = await POSTlogin(formData);

        setErrors(tmp);
        // const isempty = checkIfAllValuesAreEmpty(tmp)

        // if (isempty === true) {
        //     setPhone(FormData.phone)
        //     setOtpSent(true)
        //     console.log("here\n")
        // }
        
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
                                    type="tel"
                                    value={formData.phone}
                                    name='phone'
                                    onChange={handleChange}
                                    placeholder='Phone No.'
                                />
                                {errors.phone && <p className="errors">{errors.phone}</p>}
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

export default ParentLogin