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
           <input type="text" class="datepicker" placeholder="Pick a date"></input>
        </div>
        )
    }
}

export default Date;