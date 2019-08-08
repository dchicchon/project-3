import React, {Component} from "react";

import M from "materialize-css";
import CreatePost from "../CreatePost";

  class Modal extends Component {
      state = {
          user_id: this.props.user_id
      }
    componentDidMount() {
      // Auto initialize all the things!
      M.AutoInit();
  }

// export default function Modal() {

render() {
    return (
        <div>
            {/* <!-- Modal Trigger --> */}
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

            {/* <!-- Modal Structure --> */}
            <div id="modal1" className="modal">
                <div className="modal-content">
                    {/* <h4>Create Post</h4> */}
                    <CreatePost user_id = {this.state.user_id}/>
                </div>
            </div>
        </div>
    )
}
  }

  export default Modal; 