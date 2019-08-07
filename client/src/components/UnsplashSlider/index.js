// //unsplash api

// var request = require('request');
// var apiurl = 'https://api.unsplash.com/search/photos?page=1&query=travel&client_id=key'

// request({ url: apiurl }, function (err, res) {
//     if (err) console.log(err.message);
//     else if (res) {
//         // console.log(res);
//         var search = JSON.parse(res.body)
//         console.log(JSON.stringify(search.results[1],null, ""));
//         search.results.forEach((e) => {
//         console.log(e.description);
//         console.log(e.urls.regular);
//     });
//     }
// });

//---------------------

import React, { Component } from 'react';
import BackgroundSlider from 'react-background-slider'

class UnsplashApi extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {

        var request = require('request');
        var apiurl = 'https://api.unsplash.com/search/photos?page=1&query=travel&client_id=key'

        request({ url: apiurl }, (err, res) => {
            if (err) console.log(err.message);
            else if (res) {
                // console.log(res);
                var search = JSON.parse(res.body)
                this.setState({
                    items: search.results
                });
                // console.log(JSON.stringify(search.results[1], null, ""));
                // search.results.forEach((e) => {
                //     // console.log(e.description);
                //     console.log(e.urls.regular);
                // });

                console.log("NEW ARRAY", search.results.map(image => image.urls.regular))
            }
        });

    }

    render() {
        if (!this.state.items.length) {
            return (
                <div>Loading</div>
            );
        } else {
            return (
                <BackgroundSlider images={this.state.items.map(image => image.urls.regular)} duration={5} transition={2}/>
            );
        }
    }
}

export default UnsplashApi;
