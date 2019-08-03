import React from 'react';
import CardPanel from '../CardPanel';
import { Col, Row, Container } from "../Grid";
import TextInput from './../TextInput/index';
import Button from "../Button";

export default function CreatePost(){
    return(
        <div>
            <Container>
                <CardPanel>
                <TextInput>Title</TextInput>
                <TextInput>Record Your Journey</TextInput>

                <Button>Submit</Button>
                </CardPanel>
            </Container>

        </div>
    )
}

