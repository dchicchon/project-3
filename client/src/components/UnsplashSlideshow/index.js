// //unsplash api slideshow for login and signup


import React, { Component } from 'react';
import BackgroundSlideshow from 'react-background-slideshow';

class UnsplashApiLogin extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {

        var request = require('request');
        var apiurl = 'https://api.unsplash.com/search/photos?page=1&query=landscape&client_id=15a3b12b4e320ca5f4b5bd3319c5e0c73401530b3953e3dc8f7352a0b5669001'

        request({ url: apiurl }, (err, res) => {
           

                console.log("NEW ARRAY", search.results.map(image => image.urls.regular))
            }
        });

    }

   
}

export default UnsplashApiLogin;
