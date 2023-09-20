import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


export default function Mpinmodal({ modalOpen, setModalOpen }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [formData, setFormData] = useState(
        {
            mpin: '',
            password: '',
        }
    )

    async function handleSubmit(event) {
        event.preventDefault();

        const datatmp = {
            ...formData,
        }

        if (datatmp.fname === "") {
            toast.error("Enter Your First Name")
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
                <button className="modalbutton" variant="contained" onClick={handleClickOpen}>
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
                            id="name"
                            value={formData.password}
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
            {ToastContainer}
        </>
    );
}