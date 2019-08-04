import React, {Component} from 'react';

// Import Materialize
import M from "materialize-css";


class Date extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() {
        return(
        <div>
           <input type="text" className="datepicker" placeholder="Pick a date"></input> </div>

// { <div>
// <div class="input-field col s6">
// <i class="material-icons prefix">account_circle</i>
// <input id="icon_prefix" type="text" class="datepicker">
// <label for="icon_prefix">Pick a date</label>
// </input>
// </div>
// </div> */}

        )
    }
}

export default Date;