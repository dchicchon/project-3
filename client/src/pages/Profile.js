import React, { Component } from "react"

// Components
import CardPanel from "../components/CardPanel"
import ProfileCard from '../components/ProfileCard'
import Button from "../components/Button"
import { Col, Row, Container } from "../components/Grid";
import TextInput from "../components/TextInput"
import HeadTitle from "../components/HeadTitle"


// Google Map
import GoogleMapReact from 'google-map-react'
// import GoogleMap from "../components/GoogleMap"

import Background from "../assets/bg4.jpg"


import styled from 'styled-components';

// Utils
import API from "../Utils/API";
import Post from "../components/Post";

const Wrapper = styled.div`
  position: absolute;

  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 15px solid red;
  border-radius: 50%;
  text-align: center;

  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
  `;

const Marks = ({ text }) => <div><Wrapper>{text}</Wrapper></div>;

const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundAttachment: 'fixed'
};

// AnyReactComponent = (props) => {
//     return (
//         <div>
//             {props.text}
//         </div>
//     )
// }


export class Profile extends Component {
    state = {
        user_id: this.props.user_id,
        editBio: '',
        bio: '',
        image: '',
        posts: [],
        lat: this.props.lat,
        lng: this.props.lng,
        title: this.props.title
    }

    static defaultProps = {
        center: {
            lat: 37.77,
            lng: -122.43
        },
        zoom: 1
    };




    componentDidMount() {
        console.log("IS THIS WORKING")
        console.log("USER ID:", this.state.user_id)
        // let idPackage = {
        //     id: this.state.user_id
        // }
        // console.log(idPackage)
        var id = this.state.user_id
        // console.log(id)
        // console.log(this.state.lat)
        // console.log(this.state.lng)

        API.getUserPosts(id).then(res => {
            console.log("GET USER POSTS")
            console.log(res.data)

            // this.state.posts.push(res.data)
            this.setState({
                posts: res.data
            })
            // console.log(this.state.posts)
            // this.setState({
            //     posts: res.data
            // })
        })

        API.getProfile(id).then(res => {
            console.log("\nGET PROFILE\n")
            console.log(res.data)
            var profileData = res.data
            this.setState({
                bio: profileData.bio,
                image: profileData.image
                // profileImg: res.data.profileImg
            })
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        console.log("WE MADE IT TO THE FORM SUBMIT");
        let editData = {
            user_id: this.state.user_id,
            bio: this.state.editBio,
            image: this.state.image
        }
        console.log(editData)
        API.editUser(editData).then(response => console.log(response))
        window.location.reload()
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    // displayMarkers = () => {
    //     return this.state.posts.map((post, i) => {
    //         return <Marks 
    //         key= {i}
    //         id = {post.user_id}
    //         lat={post.lat}
    //         lng={post.lng}
    //         text={post.title}
    //     />})
    // }

    render() {
        return (
            <div style={divStyle}>
                <Container>
                    <HeadTitle>Profile</HeadTitle>
                    <Row>
                        <Col size="s6">
                            <CardPanel>
                                <CardPanel>
                                    <p>{this.state.props}</p>
                                    {/* <p>{this.state.user_id}</p> */}
                                    <p>{this.state.image}</p>
                                    <img src={this.state.image} alt="Profile picture" />
                                </CardPanel>
                            </CardPanel>
                        </Col>

                        <Col size="s6">
                            <CardPanel>
                                <ProfileCard bio={this.state.bio} />
                                <TextInput name="editBio" placeholder="Edit Bio" value={this.state.editBio} onChange={this.handleInputChange} />
                                <Button onClick={this.handleFormSubmit}>Submit</Button>
                            </CardPanel>
                        </Col>
                    </Row>
                    <CardPanel>
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                // apiKey = (ENTER HERE)
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                yesIWantToUseGoogleMapApiInternals
                            // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                            >
                                {console.log("\nWE MADE IT\n")}
                                {console.log(this.state.posts)}
                                {/* {this.state.posts.map} */}

                                {(this.state.posts.length) ? this.state.posts.map((post, i) =>
                                    <Marks
                                        key={i}
                                        id={post.user_id}
                                        lat={post.lat}
                                        lng={post.lng}
                                        text={post.title}
                                    />
                                ) : console.log("No Markers")}

                                {/* {this.displayMarkers()} */}

                            </GoogleMapReact>
                        </div>
                    </CardPanel>

                </Container>
                {/* SHOW POST ATTEMPT */}
                <Container>
                    <CardPanel>
                        <Row>
                            {(this.state.posts.length) ?
                                this.state.posts.map((post, i) => (
                                    <Post
                                        key={i}
                                        title={post.title}
                                        info={post.info}
                                        location={post.location}
                                        tag={post.tag}
                                        user_id={post.user_id}
                                    />
                                )).reverse() : "No Posts"
                            }
                        </Row>
                    </CardPanel>

                </Container>
            </div>
        )
    }
}

export default Profile;







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

