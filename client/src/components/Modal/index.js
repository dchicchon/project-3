import React from 'react'

export default function Modal(props) {
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.modal');
    //     var instances = M.Modal.init(elems, options);
    // });
    return (
        <div>
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
            <div id="modal1" className="modal modal-fixed-footer">
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