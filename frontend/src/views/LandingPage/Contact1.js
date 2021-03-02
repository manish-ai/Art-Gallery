import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

    },

    paper: {
        margin: theme.spacing(2, 4),

    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const Contact2 = () => {

    const classes = useStyles();

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const scriptURL = 'https://script.google.com/macros/s/AKfycbxjT_RWQtLkkpOIO3HohP_WK9ZhXib0jUy5yS-NQw-holiUR28P22-tCA/exec'

    const form = document.forms['google-sheet']
    const onSumbit = (e) => {
        e.preventDefault()
        if (name && subject && message) {



            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => alert("Submitted Successfully..!"))
                .catch(error => console.error('Error!', error.message))
            setName("")
            setMessage("")
            setEmail("")
            setSubject("")
        }
        else {
            alert("Please Fill The Form")

        }
    }



    return (
        <div className={classes.paper} >

            <form className={classes.form} noValidate id="contactForm" method="post" autocomplete="off" name="google-sheet" onSubmit={onSumbit}>
                {/* <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth

                    label="Email Address"
                    name="Email"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoFocus
                /> */}
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="Name"
                    label="Name"
                    type="text"
                    value={name}

                    onChange={e => setName(e.target.value)}
                    autoComplete="current-password"

                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="Phone"
                    label="Phone Number"
                    type="number"

                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    autoComplete="current-password"
                    color="primary"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="Message"
                    label="Message"
                    value={message}
                    type="text"

                    onChange={e => setMessage(e.target.value)}
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Submit
          </Button>


            </form>
        </div>
    );
}

export default Contact2;
