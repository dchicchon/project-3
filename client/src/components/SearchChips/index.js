import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"

function SearchChip(props, { children }) {
    return (
        <div>
            {/* <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>
        {children}<i className="material-icons right">send</i>
      </button> */}
            <Container>
                <Row>
                    <Col size="s4"> </Col>

                    <div class="row">
                        <div class="chip col s2 disable"> Tag<i class="close material-icons">close</i> </div>
                        <div class="chip col s2"> Tag<i class="close material-icons">close</i> </div>
                        <div class="chip col s2"> Tag<i class="close material-icons">close</i> </div>
                    </div>

                    <Col size="s4"> </Col>
                </Row>
            </Container>
        </div>
    );

}

export default SearchChip;