import React, { Component } from "react";
import { Link } from 'react-router-dom'

import BackgroundSlider from 'react-background-slider'


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
        {/* <BackgroundSlideshow images={[image1, image2, image3]} /> */}

        <Container>

          <Container>

            <Container>

              <br /><br /><br />
              <CardPanel>

                <h4 className="loginFont">Login</h4>

                <form className="col s12">
                  <Row>
                    <div className="input-field col s12">
                      <input id="email" className="validate" name='email' type="email" value={this.state.email} onChange={this.handleInputChange} />
                      <label htmlFor="email">Email</label>
                    </div>
                  </Row>
                  <Row>
                    <div className="input-field col s12">
                      <input id="password" className="validate" name='password' type="password" value={this.state.password} onChange={this.handleInputChange} />
                      <label htmlFor="password">Password</label>
                    </div>
                  </Row>
                  <Row>
                    <Col size="s6">
                    <br></br>
                      {/* <Link to="/profile"> */}
                      <Button onClick={this.handleFormSubmit}>Login <i className="material-icons right">send</i></Button>
                      {/* </Link> */}
                      <br></br>
                    </Col>
                    <Col size="s6">
                    <br></br>
                      <Link to="/signup">
                        <Button>Signup <i className="material-icons right">send</i></Button>
                      </Link>
                      <br></br>
                    </Col>
                  </Row>
                </form>
              </CardPanel>
            </Container>
          </Container>
        </Container>
          <BackgroundSlider images={[image1, image2]} duration={5} transition={1} />
      </div >

    )
  }

}


export default Login;