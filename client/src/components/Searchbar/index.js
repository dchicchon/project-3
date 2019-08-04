import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"
import Button from "../Button"

function SearchFor(props, { children }) {
    return (
        <div>
            
            <Container>
                <Row>
                    <Col size="s4"> </Col>
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s8 bgSearchBar blue-text" >
                                    {/* <i className="material-icons prefix">textsms</i> */}
                                    <i className="material-icons prefix">search</i>
                                    <input type="text" id="autocomplete-input" className="autocomplete" />
                                    <label for="autocomplete-input">Discover</label>
                                </div>
                                <Button size="col s4"></Button>
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


{/* <nav>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" required>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav> */}