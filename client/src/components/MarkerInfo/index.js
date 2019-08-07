import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';


import GoogleMap from "../GoogleMap"

import API from "../../Utils/API";



// InfoWindow component
const InfoWindow = (props) => {
    const { place } = props;
    const infoWindowStyle = {
        position: 'relative',
        bottom: 150,
        left: '-45px',
        width: 220,
        backgroundColor: 'white',
        boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
        padding: 10,
        fontSize: 14,
        zIndex: 100,
    };

    return (
        <div style={infoWindowStyle}>
            <div style={{ fontSize: 16 }}>
                {place.name}
            </div>
            <div style={{ fontSize: 14 }}>
                <span style={{ color: 'grey' }}>
                    {place.rating}{' '}
                </span>
                <span style={{ color: 'orange' }}>
                    {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
                </span>
                <span style={{ color: 'lightgrey' }}>
                    {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
                </span>
            </div>
            <div style={{ fontSize: 14, color: 'grey' }}>
                {place.types[0]}
            </div>
            <div style={{ fontSize: 14, color: 'grey' }}>
                {'$'.repeat(place.price_level)}
            </div>
            <div style={{ fontSize: 14, color: 'green' }}>
                {place.opening_hours.open_now ? 'Open' : 'Closed'}
            </div>
        </div>
    );
};

// Marker component
const Marker = (props) => {
    const markerStyle = {
        border: '1px solid white',
        borderRadius: '50%',
        height: 10,
        width: 10,
        backgroundColor: props.show ? 'red' : 'blue',
        cursor: 'pointer',
        zIndex: 10,
    };

    return (
        <Fragment>
            <div style={markerStyle} />
            {props.show && <InfoWindow place={props.place} />}
        </Fragment>
    );
};

class MarkerInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {

            user_id: props.user_id,
            places: [],
        };
    }
    static defaultProps = {
        center: {
            lat: 37.77,
            lng: -122.43
        },
        zoom: 1
    };

    componentDidMount() {
        var id = this.state.user_id


        API.getUserPosts(id).then(res => {
            console.log("GET USER POSTSs")
            console.log(res.data)

            this.setState({
                places: res.data
            })

        })
    }

    // onChildClick callback can take two arguments: key and childProps
    onChildClickCallback = (key) => {
        this.setState((state) => {
            const index = state.places.findIndex(e => e.id === key);
            state.places[index].show = !state.places[index].show;
            return { places: state.places };
        });
    };

    render() {
        const { places } = this.state;

        return (
            <Fragment>
                {!isEmpty(places) && (
                    <GoogleMap
                        defaultZoom={10}
                        defaultCenter={this.center}
                        onChildClick={this.onChildClickCallback}
                    >
                        {places.map(place =>
                            (<Marker
                                key={place.id}
                                lat={place.geometry.location.lat}
                                lng={place.geometry.location.lng}
                                place={place}
                            />))}
                    </GoogleMap>
                )}
            </Fragment>
        );
    }
}

InfoWindow.propTypes = {
    place: PropTypes.shape({
        name: PropTypes.string,
        formatted_address: PropTypes.string,
        rating: PropTypes.number,
        types: PropTypes.array,
        price_level: PropTypes.number,
        opening_hours: PropTypes.object,
    }).isRequired,
};

Marker.propTypes = {
    show: PropTypes.bool.isRequired,
    place: PropTypes.shape({
        name: PropTypes.string,
        formatted_address: PropTypes.string,
        rating: PropTypes.number,
        types: PropTypes.array,
        price_level: PropTypes.number,
        opening_hours: PropTypes.object,
    }).isRequired,
};

export default MarkerInfo;