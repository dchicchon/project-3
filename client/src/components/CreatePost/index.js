import React, { Component } from 'react';
import CardPanel from '../CardPanel';
import { Col, Row, Container } from "../Grid";
import TextInput from './../TextInput/index';
import Button from "../Button";
import Date from "../Date";
import AutocompleteLocation from "../AutocompleteLocation";

// import 'materialize-css/dist/css/materialize.min.css';
import Modal from "../Modal";


import Cookies from 'js-cookie'


// Utils
import API from '../../Utils/API'


class CreatePost extends Component {
    state = {
        // added LOCATION AND TITLE 
        info: "",
        title: "",
        location: "",
        image: '',
        tag: '',
        user_id: ''
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
            // image: this.state.image,
            tag: this.state.tag,
            user_id: this.props.id,
            title: this.state.title,
            location: this.state.location
        }
        console.log("POST DATA:", postData)
        API.newPost(postData)
            .then(response => {
                console.log(response)
            })
    }



    render() {



        // export default function CreatePost(props) {
        return (
            <div>

                {/* USER ID */}
                <h2 value={this.state.user_id}></h2>
                <Container>
                    <CardPanel>
                        <Container>
                            <form>
                                {/* <Date className="col s6" /> */}
                                {/* <TextInput>Where are you?</TextInput> */}
                                <input placeholder="Where are you?" id="location" name="location" type="text" className="validate" value={this.state.location} onChange={this.handleInputChange} />
                                {/* <label htmlFor="location">Where are you?</label> */}


                                {/* <TextInput className="col s6">Title</TextInput> */}
                                <input placeholder="Title" id="title" name="title" type="text" className="validate" value={this.state.title} onChange={this.handleInputChange} />
                                {/* <label htmlFor="title">Title</label> */}


                                {/* <TextInput>Record Your Journey</TextInput> */}
                                <input placeholder="Record your journey" id="description" name="info" type="text" className="validate" value={this.state.info} onChange={this.handleInputChange} />
                                {/* COMMENTED OUT FOR NOW */}
                                {/* <label htmlFor="description">Record?</label> */}

                                <input placeholder="Tag" id="tag" name="tag" type="text" className="validate" value={this.state.tag} onChange={this.handleInputChange} />


                                {/* UPLOAD IMAGE */}
                                <Row>
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>Upload Photo</span>
                                            <input type="file" multiple
                                            // onChange={handleChange('image')} 
                                            // {...props} 
                                            />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text" id="image" />
                                            <label htmlFor="image">Image</label>
                                        </div>
                                    </div>
                                </Row>

                                {/* DANNY IMAGE */}
                                {/* <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="image" type="text" className="validate" />
                            <label htmlFor="image">Image</label>
                        </div>
                    </div>  */}


                                <Button className="right" onClick={this.addPost} >Submit</Button>
                            </form>
                        </Container>
                    </CardPanel>
                </Container>

            </div>




            //----------DANNY------------------------------------------------------------
            // CHANGE THIS LATER TO USE OUR ROW COMPONENT
            // <div>
            // <div className="row">
            //     <form className="col s12">
            //         <div className="row">


            // ====not edited========
            // <h2 value={this.state.user_id}></h2>
            //         <div className="input-field col s6">
            //             <input placeholder="" id="description" name="info" type="text" className="validate" value={this.state.info} onChange={this.handleInputChange} />
            //             <label htmlFor="description">Description</label>
            //         </div>
            //         <div className="input-field col s6">
            //                 <input id="tag" name="tag" type="text" className="validate" value={this.state.tag} onChange={this.handleInputChange} />
            //                 <label htmlFor="tag">Tag</label>
            //             </div>
            // </div>
            //          <div className="row">
            //         <div className="input-field col s6">
            //             <input placeholder="Placeholder" id="image" type="text" className="validate" />
            //             <label htmlFor="image">Image</label>
            //         </div>
            //     </div> 
            //     </form>
            // </div>



            //     {/* <Button onClick={this.addPost}>Create Post</Button> */}
            // {/* </div> */}
        )
    }
}





export default CreatePost;
