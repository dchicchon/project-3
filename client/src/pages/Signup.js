//sign up 

import React, { Component } from "react";
// import OutlinedTextFields from "../../../-Edited-Signup";
import Grid from "../components/Grid";
import { CardActions } from "@material-ui/core";
// import OutlinedButtons from "../components/SignupBtn";

import BackgroundSlideshow from 'react-background-slideshow';

import image1 from '../assets/bg1.jpg';
import image2 from '../assets/bg2.jpg';
import image3 from '../assets/bg3.jpg';

class Signup extends Component {
    // constructor(props){
    // super(props)
    // this.state={
    //isLoggedIn: false,
    //loading: false,
    //new: false,
    //error: false,
    //errorMsg: "",
    //errClassName: "",
    // firstName: "",
    // lastName: "",
    // email: "",
    // password: ""
    //passwordConfirm: ""
    // }
    // }

    // handleSubmitAuth = (e) => {
    //     if(this.refs.submitForm.reportValdity()) {
    //         e.preventDefault();
    //         this.setState({
    //             loading:true
    //         })
    //         const userData = {
    //             firstName: this.state.firstName,
    //             lastName: this.state.lastName,
    //             email: this.state.email,
    //             password: this.state.password,
    //         }

    //         let selectButton = e.target.innerText;
    //         selectButton = selectedButton.toLowerCase();

    //         this.refs.submitForm.refs();

    //         selectedButton === "signup" ? this.handleSignup(userData): this.handleLogin(userData)
    //     }
    // }

    //validateRes = (response) => {}

    // handlesignup = (userData) => {
    //     this.setState({
    //         new:true
    //     })
    //     Actions.handleSignup(userData).then(data=>{return data.json()})
    //     .then(response=>{this.validateRes(response)})
    //     .catch(err=>console.log("err", err));
    // }

    // handleLogin = (userData) => {
    //     this.setState({
    //         new:false 
    //     })
    //     Actions.handleLogin(userData).then(data=>{return data.json()})
    //     .then(response=>{console.log(response)
    //         this.validateRes(response)})
    //     .catch(err=>console.log("err", err));
    // }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <Grid>
                    <h1>Create an account!</h1>
                    {/* <OutlinedTextFields
                        elementID="firstName"
                        inputType="firstName"
                        required={true}
                        name="firstName"
                        handleChange={this.handleInputChange}
                    /> */}
                </Grid>
                <BackgroundSlideshow images={[ image1, image2, image3 ]} />
            </div>
        )
    }
}

export default Signup; 