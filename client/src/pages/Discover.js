import React, { Component } from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post"
import { Col, Row, Container } from "../components/Grid";
import CardPanel from "../components/CardPanel"
import HeadTitle from "../components/HeadTItle"
import SearchChip from "../components/SearchChips"
import Button from "../components/Button"

import Background from "../assets/bg9.jpg"



// Utils

import API from "../Utils/API"
import { setServers } from "dns";

const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundAttachment: 'fixed'
};



class Discover extends Component {
    state = {
        user_id: this.props.user_id,
        tag: '',
        posts: {}
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    followUser = (id) => {
        console.log("WE FOLLOWED THE USER")
        // console.log(event.target.data("user_id"))
        const idPackage = {
            user_id: this.state.user_id,
            follow_id: parseInt(id)
        }
        console.log(idPackage)

        API.followUser(idPackage).then(res => console.log(res))

    }

    handleFormSubmit = event => {
        event.preventDefault()
        var postQuery = this.state.tag

        API.getPostSearch(postQuery).then(res => {
            console.log("Searched Posts xD")
            console.log(res)
            this.setState({
                posts: res.data
            })
            window.location.reload()
        })
    }



    // For now until we figure out how to get posts based on tags!
    async componentDidMount() {
        console.log("DISCOVER PAGE")
        API.getPosts().then(res => {
            console.log(res.data)
            this.setState({
                posts: res.data
            })
        })
    }

    render() {
        return (
            <div style={divStyle}>

                <Container>
                    <HeadTitle>Discover</HeadTitle>
                    <Container>
                        <Row>

                            <div className="input-field col s12 bgSearchBar blue-text" >
                                <Col size="s10">
                                    <i className="material-icons prefix">search</i>
                                    <input type="text" id="discoversearch" name="tag" value={this.state.tag} onChance={this.handleInputChange}/>
                                    <label htmlFor="autocomplete-input">Discover</label>
                                </Col>
                                <Col size="s2">
                                    <Button style={{marginTop: "20px"}} onClick={this.handleFormSubmit}></Button>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                    <SearchChip />
                    <CardPanel>
                        <Row>
                            {(this.state.posts.length) ? this.state.posts.map((post, i) => (
                                <Post
                                    followUser={this.followUser}
                                    key={i}
                                    title={post.title}
                                    info={post.info}
                                    location={post.location}
                                    tag={post.tag}
                                    user_id={post.user_id}
                                />
                            )) : "No Posts"}

                        </Row>
                    </CardPanel>

                </Container>
                {/* <BackgroundSlider images={[image4, image5, image6]} duration={5} transition={2} /> */}
            </div>
        );
    }



}

export default Discover;