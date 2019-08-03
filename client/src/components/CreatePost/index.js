import React from 'react';
import CardPanel from '../CardPanel';
import { Col, Row, Container } from "../Grid";
import TextInput from './../TextInput/index';
import Button from "../Button";
import Date from "../Date";
import AutocompleteLocation from "../AutocompleteLocation";

// import 'materialize-css/dist/css/materialize.min.css';
import Modal from "../Modal";


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

