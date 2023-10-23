import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { merchantLogin } from '../../../utilities/axios/Apis';

const MerchantLogin = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            phone: '',
            password: '',
            // type: "M"
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

        if (formData.phone === "") {
            toast.error("Enter phone number")
        } else if (formData.password === "") {
            toast.error("Enter password")
        } else if (formData.password.length < 6) {
            toast.error("password length minimum 6 character")
        }
        else {
            const response = await merchantLogin(formData);
            console.log(response)

            if (response.status === 200) {
                setFormData({
                    ...formData,
                    phone: '',
                    password: '',
                    // type: ""
                })

                toast.success("Login Successfull.")
                navigate("/merchant/dashboard", { state: { usertype: 'M' } })
            }
            else {
                toast.error(response.response.data.error);
            }
        }
    }

    return (
        <>
            <div className="signup">
                <div className="form">
                    <h1>Join Us</h1>
                    <form>
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
                                type="password"
                                value={formData.password}
                                name='password'
                                onChange={handleChange}
                                placeholder='Password'
                            />
                        </div>

                        <button style={{ cursor: "pointer" }} onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default MerchantLogin