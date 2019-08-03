import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from '../components/Button'
import { Link } from 'react-router-dom'

class Signup extends Component {
    state = {
        email: "",
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: ''
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
                        lastName: this.state.lastName
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
                    lastName: ''
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
                        <h1>Sign Up</h1>
                        <div className="row">
                            <form className="col s12">
                                <Row>
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" className="validate" onChange={this.handleInputChange} />
                                        <label for="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text" className="validate" onChange={this.handleInputChange} />
                                        <label for="last_name">Last Name</label>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" onChange={this.handleInputChange} />
                                        <label for="email">Email</label>
                                    </div>
                                </Row>

                                <Row>
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" onChange={this.handleInputChange} />
                                        <label for="password">Password</label>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="input-field col s12">
                                        <input id="confirm_password" type="password" className="validate" onChange={this.handleInputChange} />
                                        <label for="password"> Confirm Password</label>
                                    </div>
                                </Row>

                                <Row>
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>Upload Photo</span>
                                            <input type="file" onChange={this.handleInputChange} />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" />
                                        </div>
                                    </div>
                                </Row>

                            </form>
                        </div>
                        <Button onClick={this.handleFormSubmit}>Signup</Button>

                    </div>
                </Container>
            </div >

        )
    }

}

export default Signup;
