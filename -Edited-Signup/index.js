import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import OutlinedButtons from "../client/src/components/SignupBtn";
import { Link } from "react-router-dom";



const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const formSubmit = async event => {
        event.preventDefault()
        console.log("WE MADE IT TO THE FORM SUBMIT")

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
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                });

            } else {
                console.log("Make sure that your passwords match")
            }
        } else {
            console.log("Make sure to fill out all fields")
        }

    }

    return (
        <form className={classes.container} noValidate autoComplete="off" style={{ justifyContent: "center" }}>
            <p>First Name: {values.firstName}</p>
            <br />
            <p>Last Name: {values.lastName}</p>
            <br />

            <p>email: {values.email}</p>
            <br />

            <p>password: {values.password}</p>
            <br />

            <p>Confirmed Password: {values.passwordConfirm}</p>

            <TextField style={{ width: 300 }}
                // id="outlined-dense"
                label="First Name"
                className={clsx(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                value={values.firstName}
                onChange={handleChange('firstName')}
            //things I've added for state
            // id={this.props.elementID}
            // name={this.props.name}
            // type={this.props.inputType}
            // required={this.props.required}
            // onChange={(e)=>this.props.handleChange(e)}
            //have not added onChange, className, minLength, size

            />
            <br></br>
            <TextField style={{ width: 300 }}
                id="outlined-dense"
                label="Last Name"
                className={clsx(classes.textField, classes.dense)}
                margin="normal"
                variant="outlined"
                value={values.lastName}
                onChange={handleChange("lastName")}
            />
            <br></br>
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
            <br></br>
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
            <br></br>
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
            <br></br>

            <Link to="/feed">
                <OutlinedButtons>
                    <div className="signup-btn" onClick = {formSubmit} style={{ width: 100 }}>
                        Sign up!
                </div>
                </OutlinedButtons>
            </Link>

        </form>
    );
}