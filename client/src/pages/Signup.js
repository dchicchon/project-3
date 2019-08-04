import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import CardPanel from '../components/CardPanel'



export default function Signup(props) {
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
                        window.location.href = "/"
                    })
                    .catch(err => console.log(err))

                setValues({
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: ''
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
                <Container>
                <CardPanel>
                    <h1>Sign - Up</h1>
                    <div className="row">
                        <form className="col s12">
                            <Row>
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate" onChange={handleChange('first_name')} {...props} />
                                    <label for="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" onChange={handleChange('last_name')} {...props} />
                                    <label for="last_name">Last Name</label>
                                </div>
                            </Row>
                            <Row>
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" onChange={handleChange('email')} value={values.email} {...props} />
                                    <label for="email">Email</label>
                                </div>
                            </Row>

                            <Row>
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" onChange={handleChange('password')} value={values.password} {...props} />
                                    <label for="password">Password</label>
                                </div>
                            </Row>
                            <Row>
                                <div className="input-field col s12">
                                    <input id="confirm_password" type="password" className="validate" onChange={handleChange('confirm_password')} {...props} />
                                    <label for="password"> Confirm Password</label>
                                </div>
                            </Row>

                            <Row>
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>Upload Photo</span>
                                        <input type="file" onChange={handleChange('image')} {...props} />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" />
                                    </div>
                                </div>
                            </Row>

                        </form>
                    </div>

                        <Button onClick={formSubmit} >Signup</Button>
  

                    </CardPanel>
                </Container>
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
