import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QrCodePlugin from './QrCodePlugin';

export default function PayNow({modalOpen, setModalOpen}) {

    console.log("paynow");
    const [open , setOpen] = React.useState(false)

    const handleClickOpen = (e) => {
        // setIsQrOpened(true);
        setOpen(true);
    };

    

    const handleClose = () => {
        // setIsQrOpened(false);
        setOpen(false);
    };



    const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
        console.log("decodedText : " + decodedText);
        console.log("decodedResult : " + decodedResult);
    };

    return (
        <div>
            <button className='modalbutton' onClick={handleClickOpen}>
                Pay Now
            </button>

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

                    {
                        console.log("Hereeee")
                    }

                    <QrCodePlugin
                        fps={10}
                        qrbox={250}
                        disableFlip={false}
                        qrCodeSuccessCallback={onNewScanResult}
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