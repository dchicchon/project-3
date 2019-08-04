import React from "react";

export default function Modal() {
    return (
        <div>
            {/* <!-- Modal Trigger --> */}
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

            {/* <!-- Modal Structure --> */}
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </div>
    )
}