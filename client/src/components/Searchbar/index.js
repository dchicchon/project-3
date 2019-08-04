import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"
function SearchFor(props, { children }) {
    return (
        <div>
            
            <Container>
                <Row>
                    <Col size="s4"> </Col>
                    <div class="row">
                        <div class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    {/* <i class="material-icons prefix">textsms</i> */}
                                    <i class="material-icons prefix">search</i>
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


{/* <nav>
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" required>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav> */}