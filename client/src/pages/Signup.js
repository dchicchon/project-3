import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from '../components/Button'



export default function Signup() {
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
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                })
                    .then(response => {
                        console.log(response)
                        console.log(response.body)
                        // window.location.href = "/"
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
            <Container>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="Placeholder" id="first_name" type="text" class="validate"  onChange={handleChange('firstName')}/>
                                <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" />
                                <label for="password"> Confirm Password</label>
                            </div>
                        </div>
                    </form>
                </div>
                <Button>
                    Sign Up
                </Button>
                <Button>
                    Login
                </Button>
            </Container>
        </div >
    )
}

{/* <div className="card-panel center">
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
                        name="password"
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
                </div> */}
