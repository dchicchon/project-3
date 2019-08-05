import React from "react";

export default function TextInput(props){
    return(
        // <div class="row">
        <form>
          {/* <div class="row"> */}
            <div className="input-field">
              <textarea id="textarea1" className="materialize-textarea" {...props}></textarea>
              <label htmlFor="textarea1">{props.children}</label>
            </div>
          {/* </div> */}
        </form>
    //   </div>
    )
}