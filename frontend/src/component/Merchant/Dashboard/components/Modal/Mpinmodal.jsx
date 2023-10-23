import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import {useLocation} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


export default function Mpinmodal() {

    const local = useLocation();
    // console.log(local);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const usertype = local.path[1] === 'm' ? 'M' : (local.path[1] === 'p' ? 'P' : 'C')
    const [formData, setFormData] = useState(
        {
            mpin: '',
            password: '',
            type : local.state.usertype,
            id : ""
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
        }

        if (datatmp.mpin === "") {
            toast.error("Enter Your mpin")
        } else if (datatmp.mpin.length < 6) {
            toast.error("M-Pin length must be 6")
        } else if (datatmp.password === "") {
            toast.error("Enter Passwiord")
        }else if (datatmp.password.length < 6) {
            toast.error("Password length must be at least 6")
        }
        else {
            // const response = await merchantRegister(datatmp);

            // if (response.status === 200) {
            //     setFormData({
            //         ...formData,
            //         fname: '',
            //         mname: '',
            //         lname: '',
            //         phone: '',
            //         email: '',
            //         username: '',
            //         password: '',
            //         cpassword: '',
            //     });
            //     navigate("/otp", { state: datatmp })
            // } else {
                toast.error("response.response.data.error");
            // }
        }
    }

    return (
        <>
            <div>
                <button style={{width : "65px"}} className="modalbutton" onClick={handleClickOpen}>
                    M-Pin
                </button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Register M-Pin </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {/* To Add, Enter Amount and M-PIN of Your account */}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            value={formData.mpin}
                            onChange={handleChange}
                            name='mpin'
                            id="name"
                            label="M-pin"
                            type="text"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            name='password'
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>

                        {/* Enter submit functionality to this button */}
                        <Button onClick={handleSubmit}>Add </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <ToastContainer />
        </>
    );
}