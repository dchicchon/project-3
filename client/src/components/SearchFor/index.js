import React from 'react';
// import './style.css'
import { Col, Row, Container } from "../Grid"


function SearchFor(props) {
    return (
        <div>
            
            <Container>
                <Row>

                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s12 bgSearchBar blue-text" >
                                    <i className="material-icons prefix">search</i>
                                    <input type="text" id="autocomplete-input" className="autocomplete" {...props}/>
                                    <label htmlFor="autocomplete-input">Discover</label>
                                </div>
                                {/* <Button size="col s4"></Button> */}
                            </div>
                        </div>
                    </div>

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