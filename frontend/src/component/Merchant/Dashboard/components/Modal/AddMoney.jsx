import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddMoney() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className="modalbutton" variant="contained" onClick={handleClickOpen}>
                Add Money
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Money</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Add, Enter Amount and M-PIN of Your account
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Amount"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Enter M-PIN"
                        type="password"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>

                    {/* Enter submit functionality to this button */}
                    <Button onClick={handleClose}>Add </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}