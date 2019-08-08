import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"

function SearchChip(props) {
    return (
        <div>
            <Container>

                    <Col size="s3">
                        <div className="chip disable" {...props}>{props.tag}<i className="close material-icons">close</i> </div>
                    </Col>
            </Container>
        </div>
    );

}

export default SearchChip;