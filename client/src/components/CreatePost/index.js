import React, { Component } from 'react';
import CardPanel from '../CardPanel';
import { Col, Row, Container } from "../Grid";
import TextInput from './../TextInput/index';
import Button from "../Button";
import Date from "../Date";
import AutocompleteLocation from "../AutocompleteLocation";

// import 'materialize-css/dist/css/materialize.min.css';
import Modal from "../Modal";

//add from danny
import API from "../../Utils/API";
import Cookies from 'js-cookie'






class CreatePost extends Component {
    state = {
        info: "",
        image: '',
        tag: '',
        user_id: Cookies.get('id')
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    addPost = async event => {
        event.preventDefault();
        console.log("Add post begins")
        var postData = {
            info: this.state.info,
            image: this.state.image,
            tag: this.state.tag,
            user_id: this.state.user_id
        }
        console.log("POST DATA:", postData)
        API.newPost(postData)
            .then(response => {
                console.log(response)
            })
    }



    render() {



    }


    
export default function CreatePost(props) {
    return (
        <div>
            <Container>
                <CardPanel>
                    <Container>
                    <form>
                    <Date className="col s6" />
                    <TextInput>Where are you?</TextInput>
                    <TextInput className="col s6">Title</TextInput>
                    <TextInput>Record Your Journey</TextInput>
                    <Row>
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>Upload Photo</span>
                                <input type="file" multiple  
                                // onChange={handleChange('image')} 
                                {...props} 
                                />
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" />
                            </div>
                        </div>
                            </Row>
                    <Button className="right">Submit</Button>
                    </form>
                    </Container>
                </CardPanel>
            </Container>

        </div>
    )
}

