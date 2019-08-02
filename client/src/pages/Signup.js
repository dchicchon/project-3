import React from "react";
import clsx from 'clsx';
import Grid from "../components/Grid";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SignupBtn from "../components/SignupBtn";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    TextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: 200
    }
}));

export default function Signup() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const formSubmit = async event => {
        event.preventDefault();
        console.log("WE MADE IT TO THE FORM SUBMIT");
        if (values.firstName && values.lastName && values.email && values.password && values.passwordConfirm) {
            if (values.password === values.passwordConfirm) {
                await fetch("/auth/signup", {
                    method: "POST",
                    credentials: "include",
                    mode: "cors",
                    body: JSON.stringify({
                        password: values.password,
                        email: values.email,
                        firstName: values.firstName,
                        lastName: values.lastName
                    })
                })
                    .then(response => {
                        console.log(response)
                        window.location.href = "/"
                    })
                    .catch(err => console.log(err))

                setValues({
                    email: '',
                    password: ''
                });

            } else {
                console.log("Make sure that your passwords match")
            }
        } else {
            console.log("Make sure to fill out all fields")
        }

    }

    return (
        <div>
            <Grid>
                <h1>Signup</h1>
                <form className={classes.container} noValidate autoComplete="off" style={{ justifyContent: "center" }}>

                    <TextField style={{ width: 300 }}
                        // id="outlined-dense"
                        label="First Name"
                        className={clsx(classes.textField, classes.dense)}
                        margin="normal"
                        variant="outlined"
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                    />
                    <br />
                    <TextField style={{ width: 300 }}
                        id="outlined-dense"
                        label="Last Name"
                        className={clsx(classes.textField, classes.dense)}
                        margin="normal"
                        variant="outlined"
                        value={values.lastName}
                        onChange={handleChange("lastName")}
                    />
                    <br />
                    <TextField style={{ width: 300 }}
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        value={values.email}
                        onChange={handleChange("email")}
                    />
                    <br />
                    <TextField style={{ width: 300 }}
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        value={values.password}
                        onChange={handleChange("password")}
                    />
                    <br />
                    <TextField style={{ width: 300 }}
                        id="outlined-password-input"
                        label="Confirm Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        value={values.passwordConfirm}
                        onChange={handleChange("passwordConfirm")}
                    />
                    <br />

                    <SignupBtn>
                        <div className="signup-btn" onClick={formSubmit} style={{ width: 100 }}>
                            Signup
                        </div>
                    </SignupBtn>
                    <Link to="/signup">
                        <SignupBtn>
                            <div className="signup-btn" style={{ width: 100 }}>
                                Login
                            </div>
                        </SignupBtn>
                    </Link>
                </form>
            </Grid>
        </div >
    )
}
