import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"

function HeadTitle(props) {
    return (
        <div>
            {/* <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>
        {children}<i className="material-icons right">send</i>
      </button> */}
            <Container>
                <Row>
                    <Col size="s4"> </Col>

                    <div className="row">
                        <div className="input-field col s4">
                            {/* <i className="material-icons prefix">textsms</i> */}
                            {/* <input type="text" id="autocomplete-input" className="autocomplete" /> */}
                            {/* <label for="autocomplete-input">Discover</label> */}
                            <h3 className="grey-text text-darken-3">{props.children}</h3>
                        </div>

                    </div>

                    <Col size="s4"> </Col>
                </Row>
            </Container>
        </div>
    );

}

export default HeadTitle;