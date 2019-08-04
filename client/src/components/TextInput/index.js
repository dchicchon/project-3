import React from "react";

export default function TextInput(props){
    return(
        // <div class="row">
        <form>
          {/* <div class="row"> */}
            <div class="input-field">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">{props.children}</label>
            </div>
          {/* </div> */}
        </form>
    //   </div>
    )
}