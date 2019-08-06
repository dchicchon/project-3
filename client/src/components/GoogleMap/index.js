import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from "../Marker"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const handleApiLoaded = (map,maps) => {

// }

class SimpleMap extends Component {
    state = {
        lat: this.props.lat,
        lng: this.props.lng,
        posts: this.props.posts,
    }

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
                    apiKey="AIzaSyAtqm7ety_MOQiAowHsaixmgDCTFlMROwo"
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    {console.log(this.state.posts)}
                    {/* {this.state.posts.map} */}
                    {/* <Marker lat={this.state.lat} lng={this.state.lng} text="Marker"/> */}

                    {(this.state.posts.length) ? this.state.posts.map((post, i) =>
                        <AnyReactComponent
                            key= {i}
                            id = {post.user_id}
                            lat={post.lat}
                            lng={post.lng}
                            text="Marker1"
                        />
                    ) : console.log("No Markers")}

                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;