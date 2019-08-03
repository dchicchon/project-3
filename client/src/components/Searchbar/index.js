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
                    <div class="row">
                        <div class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">textsms</i>
                                    <input type="text" id="autocomplete-input" class="autocomplete" />
                                    <label for="autocomplete-input">Discover</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Col size="s4"> </Col>
                </Row>
            </Container>
        </div>
    );

}

export default SearchFor;