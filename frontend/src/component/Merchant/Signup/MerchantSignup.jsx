import React, { useState } from 'react';
import MerchantCategory from './category';
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {merchantRegister} from "./../../../utilities/axios/Apis"

const MerchantSignup = () => {

    const [category, setCategory] = React.useState([]);

    const navigate = useNavigate();
    const [formData, setFormData] = useState(
        {
            fname: '',
            mname: '',
            lname: '',
            phone: '',
            email: '',
            username: '',
            password: '',
            cpassword: '',
        }
    )


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

        const datatmp = {
            ...formData,
            category: category
        };

        if (datatmp.fname === "") {
            toast.error("Enter Your First Name")
        } else if (datatmp.mname === "") {
            toast.error("Enter Your Middle Name")
        } else if (datatmp.lname === "") {
            toast.error("Enter Your Last Name")
        } else if (datatmp.phone === "") {
            toast.error("Enter Your Phone")
        } else if (datatmp.email === "") {
            toast.error("Enter Your Email")
        } else if (!datatmp.email.includes("@")) {
            toast.error("Enter Valid Email")
        } else if (datatmp.category.length === 0) {
            toast.error("Select Category")
        } else if (datatmp.username === "") {
            toast.error("Enter Your Username")
        } else if (datatmp.password === "") {
            toast.error("Enter Your Password")
        } else if (datatmp.password.length < 6) {
            toast.error("password length minimum 6 character")
        } else if (datatmp.cpassword !== datatmp.password) {
            toast.error("Password doesn't match")
        }
        else {
            const response = await merchantRegister(datatmp);

            if (response.status === 200) {
                setFormData({
                    ...formData,
                    fname: '',
                    mname: '',
                    lname: '',
                    phone: '',
                    email: '',
                    username: '',
                    password: '',
                    cpassword: '',
                });
                navigate("/otp", {state : datatmp})
            } else {
                toast.error(response.response.data.error);
            }
        }
    }

    return (
        <>
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
                        </div>

                        <div>
                            <input
                                type='text'
                                value={formData.phone}
                                onChange={handleChange}
                                name='phone'
                                placeholder='Mobile'
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                name='email'
                                placeholder='Email'
                            />

                        </div>

                        <div>
                            <MerchantCategory personName={category} setPersonName={setCategory} />
                        </div>

                        <div>
                            <input
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                name='username'
                                placeholder='Select Username'
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                value={formData.password}
                                name='password'
                                onChange={handleChange}
                                placeholder='Password'
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                value={formData.cpassword}
                                name='cpassword'
                                onChange={handleChange}
                                placeholder='Confirm Password'
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default MerchantSignup