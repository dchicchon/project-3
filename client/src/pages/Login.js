import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './style/login.css'

import BackgroundSlideshow from 'react-background-slideshow';


import image1 from '../assets/bg1.jpg';
import image2 from '../assets/bg2.jpg';
import image3 from '../assets/bg3.jpg';

import Button from '../components/Button'

import { Col, Row, Container } from "../components/Grid";
import CardPanel from '../components/CardPanel'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  // Here the state values are being handled
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  // This handles the button submit to make a post to the route /auth/login
  handleFormSubmit = async event => {
    event.preventDefault();
    console.log("WE MADE IT TO THE FORM SUBMIT");
    await fetch("/auth/login", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        password: this.state.password,
        email: this.state.email
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        window.location.href = "/"
      })
      .catch(err => console.log(err))

    this.setstate({
      email: '',
      password: '',
    });

  }

  // This is the JSX that we render
  render() {
    return (
      <div>
        <Container>
          <Container>
            <Container>
              <br></br><br></br><br></br>
              <CardPanel>
                <h1>Login</h1>
                <form className="col s12">
                  <Row>
                    <div className="input-field col s12">
                      <input id="email" className="validate" name='email' type="email" value={this.state.email} onChange={this.handleInputChange}  />
                      <label htmlFor="email">Email</label>
                    </div>
                  </Row>
                  <Row>
                    <div className="input-field col s12">
                      <input id="password" className="validate" name='password' type="password" value={this.state.password} onChange={this.handleInputChange}  />
                      <label htmlFor="password">Password</label>
                    </div>
                  </Row>
                  <Row>
                    <Col size="s6">
                      {/* <Link to="/profile"> */}
                      <Button onClick={this.handleFormSubmit}>Login</Button>
                      {/* </Link> */}
                    </Col>
                    <Col size="s6">
                      <Link to="/signup">
                        <Button>Signup</Button>
                      </Link>
                    </Col>
                  </Row>
                </form>
              </CardPanel>
            </Container>
          </Container>
        </Container>
        {/* <BackgroundSlideshow images={[ image1, image2, image3 ]} /> */}
      </div >

    )
  }

}


export default Login;