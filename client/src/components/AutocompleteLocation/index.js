/* global google */

import React from "react";
import ReactDependentScript from 'react-dependent-script'


class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChanged(place);
  }

  render() {
    return (

      <input
        ref={this.autocompleteInput}
        id="autocomplete"
        placeholder="Enter your address"
        type="text"
      />
    );
  }
}

export default Autocomplete;









// import PlacesAutocomplete from 'react-places-autocomplete';
// import {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng,
// } from 'react-places-autocomplete';

// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMaADkXGTjthhbPHVctBZQ22FQQgInOwc&libraries=places"></script>





// import React from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';
 
// class LocationSearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '' };
//   }
 
//   handleChange = address => {
//     this.setState({ address });
//   };
 
//   handleSelect = address => {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => console.log('Success', latLng))
//       .catch(error => console.error('Error', error));
//   };
 
//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }

















// import React, {Component} from "react";

// // const suggestions = [
// //     { label: 'Afghanistan' },
// //     { label: 'Aland Islands' },
// //     { label: 'Albania' },
// //     { label: 'Algeria' },
// //     { label: 'American Samoa' },
// //     { label: 'Andorra' },
// //     { label: 'Angola' },
// //     { label: 'Anguilla' },
// //     { label: 'Antarctica' },
// //     { label: 'Antigua and Barbuda' },
// //     { label: 'Argentina' },
// //     { label: 'Armenia' },
// //     { label: 'Aruba' },
// //     { label: 'Australia' },
// //     { label: 'Austria' },
// //     { label: 'Azerbaijan' },
// //     { label: 'Bahamas' },
// //     { label: 'Bahrain' },
// //     { label: 'Bangladesh' },
// //     { label: 'Barbados' },
// //     { label: 'Belarus' },
// //     { label: 'Belgium' },
// //     { label: 'Belize' },
// //     { label: 'Benin' },
// //     { label: 'Bermuda' },
// //     { label: 'Bhutan' },
// //     { label: 'Bolivia, Plurinational State of' },
// //     { label: 'Bonaire, Sint Eustatius and Saba' },
// //     { label: 'Bosnia and Herzegovina' },
// //     { label: 'Botswana' },
// //     { label: 'Bouvet Island' },
// //     { label: 'Brazil' },
// //     { label: 'British Indian Ocean Territory' },
// //     { label: 'Brunei Darussalam' },
// //   ].map(suggestion => ({
// //     value: suggestion.label,
// //     label: suggestion.label,
// //   }));

// // Import Materialize
// import M from "materialize-css";


  
//   class AutocompleteLocation extends Component {
//     componentDidMount() {
//       // Auto initialize all the things!
//       M.AutoInit();
//   }

// render() {
//     return(
//       <div>
//       {/* <div class="row"> */}
//       <div className="col s12">
//         <div className="row">
//           <div className="input-field col s12">
//             <i className="material-icons prefix">textsms</i>
//             <div input type="text" id="autocomplete-input" className="autocomplete">
//             <label for="autocomplete-input">Where are you?</label>
//           </div>
//         </div>
//         </div>
//       </div>
//     {/* </div> */}

//       <form>
//       <div class="row">
//         <div class="input-field">
//           <textarea id="autocomplete-input" class="autocomplete"></textarea>
//           <label for="autocomplete-input">Where are you?</label>
//         </div>
//       </div>
//       </form>

//       </div>

//     )
//   }
//   }

//   export default AutocompleteLocation;