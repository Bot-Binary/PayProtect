import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PayNow() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Pay Now
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Pay Now</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Pay, Enter PayI'd or Upload QR code of Merchant
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="PayI'd"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                    <DialogContentText>
                        Or
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Upload QR"
                        type="file"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>

                    {/* Enter submit functionality to this button */}
                    <Button onClick={handleClose}>Pay Now</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}