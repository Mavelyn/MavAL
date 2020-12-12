import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(-2),
        fontWeight: theme.typography.fontWeightBold,
    },
}));

export default function RegisterDialog(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                Register
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <Typography component="h1" variant="h4" className={classes.title}>
                        Register
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <TextField 
                        variant="outlined" 
                        margin="normal"
                        required
                        fullWidth
                        id="email" 
                        name="email" 
                        label="Email" 
                        size="small"
                        onChange={props.handleEmailChange}
                    />
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username" 
                        name="username" 
                        label="Username" 
                        size="small"
                        onChange={props.handleUsernameChange}
                    />
                    <TextField 
                        variant="outlined" 
                        margin="normal"
                        required
                        fullWidth
                        id="password" 
                        name="password" 
                        label="Password" 
                        size="small"
                        onChange={props.handlePasswordChange}
                    />
                    <TextField 
                        variant="outlined" 
                        margin="normal"
                        required
                        fullWidth
                        id="confirm_password" 
                        name="confirm_password" 
                        label="Confirm password" 
                        size="small"
                        onChange={props.handleConfirmPasswordChange}
                    />
                    <DialogActions>
                        <Button 
                            type="submit"
                            color="primary"
                            onClick={props.handleRegister}
                        >
                            Register
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}