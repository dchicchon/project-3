import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const handleApiLoaded = (map,maps) => {

// }

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 37.77,
            lng: -122.43
        },
        zoom: 11
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    apiKey= "AIzaSyAtqm7ety_MOQiAowHsaixmgDCTFlMROwo"
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >

                    <AnyReactComponent
                        lat={37.7897}
                        lng={122.3973}
                        text="Marker1"
                    />

                    <AnyReactComponent
                    lat = {37.78}
                    lng ={122.40}
                    text={"Marker2"}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;