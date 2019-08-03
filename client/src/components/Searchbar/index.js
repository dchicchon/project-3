import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"
function SearchFor(props, { children }) {
    return (
        <div>
            {/* <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>
        {children}<i className="material-icons right">send</i>
      </button> */}
            <Container>
                <Row>
                    <Col size="s4"> </Col>
                    <h5 class="header col s4 light grey-text text-lighten-1">Searchbar</h5>
                    <Col size="s4"> </Col>
                </Row>
            </Container>
        </div>
    );

}

export default SearchFor;