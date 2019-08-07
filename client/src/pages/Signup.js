import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from '../components/Button'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const log = console.log()

class Signup extends Component {
    state = {
        email: "",
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
        // url: '',
        file: '',
        fileName: '',
        uploadedFile: ''
        // success: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handlePicture = e => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.files[0].name
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        let file = this.state.file
        // console.log(`FILE:`, file)
        // const formData = new FormData();
        // formData.append('file', file)
        // console.log("\FORM DATA")
        // console.log(formData)
        // log("\nUPLOAD INPUT")
        // log(this.uploadInput)
        // let file = this.uploadInput.files[0];
        // log("\nFILE")
        // log(file)
        // let fileParts = this.uploadInput.files[0].name.split('.');
        // log("\nFILE PARTS ")
        // let fileName = fileParts[0]
        // let fileType = fileParts[1]
        // console.log("Preparing to upload")
        // console.log(file)
        // console.log(fileParts)
        // console.log(fileName)
        // console.log(fileType)
        // try {
        //     fetch("/api/user", {
        //         method: "POST",
        //         credentials: "include",
        //         // mode: 'cors',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: formData,
        //         success: function (response) {
        //             if (response === null) {
        //                 console.log("ERROR")
        //             } else {
        //                 console.log("SUCCESS I GUESS?")
        //             }
        //         }

        //     })
        // } catch(err) {
        //     console.log(err)
        // }
        // const res = await axios.post("/api/user", formData, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        // console.log("\nGIMME A RES PLEASE")
        // console.log(res)

        // const { fileName, filePath } = res.data;
        // console.log("\nTHIS IS THE FILE NAME AND PATH")
        // console.log(fileName)
        // console.log(filePath)
        // this.setState({
        //     uploadedFile: fileName
        // })
        // setUploadedFile({ fileName, filePath });

        // } catch (err) {
        //     if (err.response.status === 500) {
        //         console.log("There was a problem with the server")
        //     } else {
        //         console.log(err.response.data.msg)
        //     }
        // }
        // axios.post("/api/user", formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        //     // user_id: this.state.user_id,
        //     // fileName: fileName,
        //     // fileType: fileType
        // }).then(res => {
        //     console.log(res)
        //     var returnData = res.data.data.returnData;
        //     var signedRequest = returnData.signedRequest;
        //     var url = returnData.url;
        // this.setState({
        //     url: url
        // })
        // var options = {
        //     headers: {
        //         "Content-Type": fileType
        //     }
        // }
        // axios.put(signedRequest, file, options)
        //     .then(res => {
        //         console.log("Response from s3")
        //         this.setState({ success: true })
        //     })
        // console.log("Received a signed request " + signedRequest)
        // })

        console.log("WE MADE IT TO THE FORM SUBMIT");
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.passwordConfirm) {
            if (this.state.password === this.state.passwordConfirm) {
                console.log(file)
                await fetch("/api/user", {
                    method: "POST",
                    credentials: "include",
                    mode: "cors",
                    // body: {
                    //     image: file
                    // },
                    body: JSON.stringify({
                        image: file
                    }),
                    // headers: new Headers({
                    //     "Content-Type": "application/json"
                    // })
                }).then(res => {
                    console.log("\nHELLO PHOTO\n")
                    console.log(res)
                })
                await fetch("/auth/signup", {
                    method: "POST",
                    credentials: "include",
                    mode: "cors",
                    body: JSON.stringify({
                        password: this.state.password,
                        email: this.state.email,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        // image: this.state.file
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                })
                    .then(response => {
                        // window.location.href = "/"
                    })
                    .catch(err => console.log(err))

                this.setState({
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
                                        <div className="btn">
                                            <span>Upload Photo</span>
                                            <input
                                                type='file'
                                                onChange={this.handlePicture}
                                            />
                                            {/* <input type='file' onChange={this.handlePicture} ref={(ref) => { this.uploadInput = ref }} /> */}
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
            </div >

        )
    }

}

export default Signup;