import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from '../components/Button'
// import './style/login.css'
// import { Link } from 'react-router-dom'
import BackgroundSlider from 'react-background-slider'

import image7 from '../assets/bg7.jpg';
import image5 from '../assets/bg5.jpg';
import image6 from '../assets/bg6.jpg';

class Signup extends Component {
    state = {
        email: "",
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
        image: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        console.log("WE MADE IT TO THE FORM SUBMIT");
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.passwordConfirm) {
            if (this.state.password === this.state.passwordConfirm) {
                await fetch("/auth/signup", {
                    method: "POST",
                    credentials: "include",
                    mode: "cors",
                    body: JSON.stringify({
                        password: this.state.password,
                        email: this.state.email,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        image: this.state.image
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
                    passwordConfirm: '',
                    firstName: '',
                    lastName: '',
                    image: ''
                });

            } else {
                console.log("Make sure that your passwords match")
            }
        } else {
            console.log("Make sure to fill out all fields")
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="card-panel center">
                        <h4>Sign Up</h4>
                        <div className="row">
                            <form className="col s12">
                                <Row>
                                    <div className="input-field col s6">
                                        <input id="firstName" className="validate" type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                                        <label htmlFor="firstName">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="lastName" className="validate" type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                                        <label htmlFor="lastLame">Last Name</label>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="input-field col s12">
                                        <input id="email" className="validate" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </Row>

                                <Row>
                                    <div className="input-field col s12">
                                        <input id="password" className="validate" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="input-field col s12">
                                        <input id="passwordConfirm" className="validate" type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleInputChange} />
                                        <label htmlFor="passwordConfirm"> Confirm Password</label>
                                    </div>
                                </Row>

                                <Row>
                                    <div className="file-field input-field">
                                        <div className="btn blue">
                                            <span>Upload Photo</span>
                                            <input type="file"  name="image" value={this.state.image} onChange={this.handleInputChange}/>
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" />
                                        </div>
                                    </div>
                                </Row>

                            </form>
                        </div>
                        <Button onClick={this.handleFormSubmit}>Signup</Button>

                    </div>
                </Container>
                <BackgroundSlider images={[image7, image5]} duration={5} transition={1} />

            </div >

        )
    }

}

export default Signup;