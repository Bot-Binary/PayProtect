import React, { useState } from 'react'
import './signup.css'
// import { useNavigate } from 'react-router-dom';
import { POSTsignup } from '../../../utilities/axios/Paths';

const Signup = () => {

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

    console.log(formData)
    
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
        const Loggedin = await POSTsignup(formData);

        console.log(Loggedin)
    }

    return (
        <div className="signup">


            <div className="form">
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={formData.fname}
                            name='fname'
                            onChange={handleChange}
                            placeholder='First Name'
                        />
                        <br></br>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={formData.mname}
                            onChange={handleChange}
                            name='mname'
                            placeholder='Middle Name'
                        />

                        <br></br>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={formData.lname}
                            onChange={handleChange}
                            name='lname'
                            placeholder='Last Name'
                        />
                        <br></br>
                    </div>

                    <div>
                        <input
                            type='text'
                            value={formData.phone}
                            onChange={handleChange}
                            name='phone'
                            placeholder='Mobile'
                        />
                        <br></br>
                    </div>

                    <div>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            name='email'
                            placeholder='Email'
                        />
                        <br></br>

                    </div>

                    <div>
                        <div className='dob'>
                            Date of birth
                        </div>
                        <input
                            type="date"
                            value={formData.dob}
                            onChange={handleChange}
                            name='dob'
                            placeholder='Date Of Birth'
                        />
                        <br></br>
                    </div>

                    <div>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            name='username'
                            placeholder='Select Username'
                        />
                        <br></br>
                    </div>

                    <div>
                        <input
                            type="password"
                            value={formData.password}
                            name='password'
                            onChange={handleChange}
                            placeholder='Password'
                        />
                        <br></br>
                    </div>

                    <div>
                        <input
                            type="password"
                            value={formData.cpassword}
                            name='cpassword'
                            onChange={handleChange}
                            placeholder='Confirm Password'

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