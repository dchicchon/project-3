import React from 'react'
import { Col, Row, Container } from "../Grid";

export default function SearchInput(props) {
    return (
        <div>
            <Row>
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">{props.children}</label>
                        </div>
                    </div>
                </form>
                </Row>
        </div>
    )
}