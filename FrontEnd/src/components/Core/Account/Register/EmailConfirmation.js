import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Image from 'material-ui-image';


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
   Register
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      
      >
      
      
        <DialogTitle id="alert-dialog-title">{" Email Confirmation"}</DialogTitle>
      
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Email has been sent to your mailing address ,open your email and click on link to verify
          </DialogContentText>
        </DialogContent>
      
      </Dialog>
    </div>
  );
}
