import React, {Component} from "react";

// const suggestions = [
//     { label: 'Afghanistan' },
//     { label: 'Aland Islands' },
//     { label: 'Albania' },
//     { label: 'Algeria' },
//     { label: 'American Samoa' },
//     { label: 'Andorra' },
//     { label: 'Angola' },
//     { label: 'Anguilla' },
//     { label: 'Antarctica' },
//     { label: 'Antigua and Barbuda' },
//     { label: 'Argentina' },
//     { label: 'Armenia' },
//     { label: 'Aruba' },
//     { label: 'Australia' },
//     { label: 'Austria' },
//     { label: 'Azerbaijan' },
//     { label: 'Bahamas' },
//     { label: 'Bahrain' },
//     { label: 'Bangladesh' },
//     { label: 'Barbados' },
//     { label: 'Belarus' },
//     { label: 'Belgium' },
//     { label: 'Belize' },
//     { label: 'Benin' },
//     { label: 'Bermuda' },
//     { label: 'Bhutan' },
//     { label: 'Bolivia, Plurinational State of' },
//     { label: 'Bonaire, Sint Eustatius and Saba' },
//     { label: 'Bosnia and Herzegovina' },
//     { label: 'Botswana' },
//     { label: 'Bouvet Island' },
//     { label: 'Brazil' },
//     { label: 'British Indian Ocean Territory' },
//     { label: 'Brunei Darussalam' },
//   ].map(suggestion => ({
//     value: suggestion.label,
//     label: suggestion.label,
//   }));

// Import Materialize
import M from "materialize-css";


  
  class AutocompleteLocation extends Component {
    componentDidMount() {
      // Auto initialize all the things!
      M.AutoInit();
  }

render() {
    return(
      <div>
      {/* <div class="row"> */}
      <div className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">textsms</i>
            <div input type="text" id="autocomplete-input" className="autocomplete">
            <label for="autocomplete-input">Where are you?</label>
          </div>
        </div>
        </div>
      </div>
    {/* </div> */}

      <form>
      <div class="row">
        <div class="input-field">
          <textarea id="autocomplete-input" class="autocomplete"></textarea>
          <label for="autocomplete-input">Where are you?</label>
        </div>
      </div>
      </form>

      </div>

    )
  }
  }

  export default AutocompleteLocation;