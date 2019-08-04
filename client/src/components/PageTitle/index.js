import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"

function HeadTitle(props, { children }) {
    return (
        <div>
            {/* <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>
        {children}<i className="material-icons right">send</i>
      </button> */}
            <Container>
                <Row>
                    <Col size="s4"> </Col>

                    <div class="row">
                        <div class="input-field col s4">
                            {/* <i class="material-icons prefix">textsms</i> */}
                            {/* <input type="text" id="autocomplete-input" class="autocomplete" /> */}
                            {/* <label for="autocomplete-input">Discover</label> */}
                            <h3 class="grey-text text-darken-3">DISCOVER</h3>
                        </div>

                    </div>

                    <Col size="s4"> </Col>
                </Row>
            </Container>
        </div>
    );

}

export default HeadTitle;