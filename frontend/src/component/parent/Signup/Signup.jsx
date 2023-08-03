import React, { useState } from 'react'
import './signup.css'
import { POSTsignup } from '../../../utilities/axios/Paths';
import { checkIfAllValuesAreEmpty } from '../../../utilities/axios/extrafns';

const Signup = params => {

    // const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            fname: '',
            mname: '',
            lname: '',
            phone: '',
            email: '',
            dob: '',
            username: '',
            password: '',
            cpassword: ''

        }
    )

    const [errors, setErrors] = useState(
        {
            fname: '',
            mname: '',
            lname: '',
            phone: '',
            email: '',
            dob: '',
            username: '',
            password: '',
            cpassword: '',
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

        const tmp = await POSTsignup(formData);

        setErrors(tmp);
        const isempty = checkIfAllValuesAreEmpty(tmp)

        if (isempty === true) {
            params.setPhone(FormData.phone)
            params.setOtpSent(true)
        }
    }

    return (
        <div className="signup">
            <div className="form">
                <h1>Join Us</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={formData.fname}
                            name='fname'
                            onChange={handleChange}
                            placeholder='First Name'
                        />
                        {errors.fname && <p className="errors">{errors.fname}</p>}
                        {/* <br></br> */}
                    </div>
                    <div>
                        <input
                            type="text"
                            value={formData.mname}
                            onChange={handleChange}
                            name='mname'
                            placeholder='Middle Name'
                        />
                        {errors.mname && <p className="errors">{errors.mname}</p>}
                        {/* <br></br> */}
                    </div>
                    <div>
                        <input
                            type="text"
                            value={formData.lname}
                            onChange={handleChange}
                            name='lname'
                            placeholder='Last Name'
                        />
                        {errors.lname && <p className="errors">{errors.lname}</p>}
                    </div>

                    <div>
                        <input
                            type='text'
                            value={formData.phone}
                            onChange={handleChange}
                            name='phone'
                            placeholder='Mobile'
                        />
                        {errors.phone && <p className="errors">{errors.phone}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            name='email'
                            placeholder='Email'
                        />
                        {errors.email && <p className="errors">{errors.email}</p>}

                    </div>

                    <div className='dob'>
                        <span>
                            Date of birth
                        </span>
                        <span>
                            <input
                                type="date"
                                value={formData.dob}
                                onChange={handleChange}
                                name='dob'
                                placeholder='Date Of Birth'
                            />
                            {errors.dob && <p className="errors">{errors.dob}</p>}
                        </span>
                    </div>

                    <div>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            name='username'
                            placeholder='Select Username'
                        />
                        {errors.username && <p className="errors">{errors.username}</p>}
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

                    <div>
                        <input
                            type="password"
                            value={formData.cpassword}
                            name='cpassword'
                            onChange={handleChange}
                            placeholder='Confirm Password'
                        />
                        {errors.cpassword && <p className="errors">{errors.cpassword}</p>}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup