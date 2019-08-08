import React from './node_modules/react';
// import './style.css'
import { Col, Row, Container } from "../Grid"

function HeadTitle(props) {
    return (
        <wrapper>
                        <div className="input-field col s4" style={{textAlign: "center"}}>
                            {/* <i className="material-icons prefix">textsms</i> */}
                            {/* <input type="text" id="autocomplete-input" className="autocomplete" /> */}
                            {/* <label for="autocomplete-input">Discover</label> */}
                            <h3 className="grey-text text-darken-3" >{props.children}</h3>
                        </div>
        </wrapper>
    );

}

export default HeadTitle;