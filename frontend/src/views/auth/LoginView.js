import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { login } from '../../actions/userActions'
const useStyles = makeStyles((theme) => ({


    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttons: {
        margin: theme.spacing(19, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'center'
    },
    margin: {
        margin: theme.spacing(2),
        display: 'block',
        width: '30%'


    },
}));

const LoginView = () => {

    let navigate = useNavigate();
    const classes = useStyles();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    useEffect(() => {
        if (localStorage.getItem('userInfo')) {
            navigate('/admin/productlist');
        }
    })

    function submitHandler(e) {
        e.preventDefault()
        dispatch(login(email, password))

    }

    return <div className="justify-content-center d-flex">

        <form className={classes.form} onSubmit={submitHandler}>
            <Typography component="h1" variant="h4">
                Admin Login
          </Typography>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Log In
            </Button>

            <Box mt={5}>
                {/* <Copyright /> */}
            </Box>
        </form>
    </div>;
}
// #endregion

export default LoginView;