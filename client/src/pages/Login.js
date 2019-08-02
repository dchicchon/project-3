import React from "react";
import { Link } from 'react-router-dom'

import BackgroundSlideshow from 'react-background-slideshow';


import image1 from '../assets/bg1.jpg';
import image2 from '../assets/bg2.jpg';
import image3 from '../assets/bg3.jpg';

import Button from '../components/Button'

import { Col, Row, Container } from "../components/Grid";
import CardPanel from '../components/CardPanel'




export default function Login() {
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  };

  const formSubmit = async event => {
    event.preventDefault()
    console.log("WE MADE IT TO THE FORM SUBMIT");
    await fetch("/auth/login", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        email: values.email,
        password: values.password
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

  }

  return (
    <div>
      <Container>
        <Container>

        <div className="card-panel center">
          <h1>Login</h1>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <Button onClick={formSubmit}>
                  Login In
        </Button>
              </div>
              <div className="input-field col s6">
                <Link to="/signup">
                  <Button>
                    Sign Up
        </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        </Container>
      </Container>
    </div >
  )
}



{/* <div>
      <Container>
        <h1>Login</h1>
        <form className={classes.container} noValidate autoComplete="off" style={{ justifyContent: "center" }}>

          <TextField style={{ width: 300 }}
            // id="outlined-email-input"
            label="Email"
            className={clsx(classes.textField, classes.dense)}
            type="email"
            // name="email"
            // autoComplete="email"
            margin="normal"
            variant="outlined"
            value={values.email}
            onChange={handleChange('email')}
          />
          <br />
          <TextField style={{ width: 300 }}
            id="outlined-password-input"
            label="Password"
            className={clsx(classes.textField, classes.dense)}
            type="password"
            name="password"
            autoComplete="password"
            margin="normal"
            variant="outlined"
            value={values.password}
            onChange={handleChange('password')}
          />
          <br />
          <SignupBtn>
            <div className="login-btn" onClick={formSubmit} style={{ width: 100 }}>
              Login
            </div>
          </SignupBtn>
          <Link to="/signup">
            <SignupBtn>
              <div className="signup-btn" style={{ width: 100 }}>
                Signup
              </div>
            </SignupBtn>
          </Link>
        </form>
      </Container>
      <BackgroundSlideshow images={[ image1, image2, image3 ]} />
    </div> */}