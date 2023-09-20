import React, { useState } from 'react'

const Mpin = () => {

    // const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            mpin: "",
            password: ""
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

        // const tmp = await POSTmpin(formData);

        // setErrors(tmp);
        // const isempty = checkIfAllValuesAreEmpty(tmp)
        
        // Navigate('/dashboard')

        
    }

    return (
        <div>
            {/* {!otpSent ? ( */}
                < div className="signup" >
                    <div className="form">
                        <h1>M-PIN</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="number"
                                    value={formData.mpin}
                                    name='mpin'
                                    onChange={handleChange}
                                    placeholder='M-Pin'
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