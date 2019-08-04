import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"

function SearchChip(props) {
    return (
        <div>
            {/* <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>
        {children}<i className="material-icons right">send</i>
      </button> */}
            <Container>
                <Row>
                    <Col size="s4"> </Col>

                    <div className="row">
                        <div className="chip col s2 disable"> Hike<i className="close material-icons">close</i> </div>
                        <div className="chip col s2"> Food<i className="close material-icons">close</i> </div>
                        <div className="chip col s2"> Travel<i className="close material-icons">close</i> </div>
                    </div>

                    <Col size="s4"> </Col>
                </Row>
            </Container>
        </div>
    );

}

export default SearchChip;