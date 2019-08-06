import React, { Component } from "react"

// Components
import CardPanel from "../components/CardPanel"
import ProfileCard from '../components/ProfileCard'
import Button from "../components/Button"
import { Col, Row, Container } from "../components/Grid";
import TextInput from "../components/TextInput"

// Google Map
// import GoogleMapReact from 'google-map-react'
import GoogleMap from "../components/GoogleMap"

// Utils
import API from "../Utils/API";


export class Profile extends Component {
    state = {
        user_id: this.props.user_id,
        editBio: '',
        bio: '',
        profileImg: '',
        postCoords: []
        // map: this.state.map
    }

    componentDidMount() {
        console.log("IS THIS WORKING")
        console.log("USER ID:", this.state.user_id)
        // let idPackage = {
        //     id: this.state.user_id
        // }
        // console.log(idPackage)
        let id = this.state.user_id
        console.log(id)
        API.getProfile(id).then(res => {
            console.log("\nGET PROFILE\n")
            console.log(res.data)
            this.setState({
                bio: res.data.bio,
                profileImg: res.data.profileImg
            })
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        console.log("WE MADE IT TO THE FORM SUBMIT");
        let editData = {
            user_id: this.state.user_id,
            bio: this.state.editBio
        }
        console.log(editData)
        API.editUser(editData).then(response => console.log(response))
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <TextInput name="editBio" value={this.state.editBio} onChange={this.handleInputChange} />
                    <Button onClick={this.handleFormSubmit}>Submit</Button>
                    <Row>
                        <Col size="s4">
                            <CardPanel>
                                <CardPanel>
                                    <p>{this.state.profileImg}</p>
                                    <img src={this.state.profileImg} alt="Profile picture" />
                                </CardPanel>
                            </CardPanel>
                        </Col>

                        <Col size="s8">
                            <CardPanel>
                                <ProfileCard bio={this.state.bio} />
                            </CardPanel>
                        </Col>
                    </Row>
                    <CardPanel>
                        <GoogleMap/>
                        {/* <img src={this.state.map} /> */}
                    </CardPanel>
                </Container>
            </div>
        )
    }
}

export default Profile







// function Profile(props) {
//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <Col size="s4">
//                         <CardPanel>
//                             <CardPanel>
//                                 <img src={props.profileImg} />
//                             </CardPanel>
//                         </CardPanel>
//                     </Col>

//                     <Col size="s8">
//                         <CardPanel>
//                             <ProfileCard />
//                         </CardPanel>
//                     </Col>
//                 </Row>
//                 <CardPanel>
//                     <img src={props.map} />
//                 </CardPanel>
//             </Container>
//         </div>
//     );
// }

// export default Profile;

