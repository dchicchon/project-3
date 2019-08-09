// //unsplash api slideshow for login and signup

//---------trial without react------------

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

import React, { Component } from 'react';
import BackgroundSlideshow from 'react-background-slideshow';

class UnsplashApiLogin extends Component {

    // constructor(props) {
    // super(props);
    state = {
        items: []
    }
    // }

    async componentDidMount() {

        var request = require('request');
        var apiurl = 'https://api.unsplash.com/search/photos?page=1&query=landscape&client_id=15a3b12b4e320ca5f4b5bd3319c5e0c73401530b3953e3dc8f7352a0b5669001'

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
                <div></div>
            );
        } else {
            return (
                <BackgroundSlideshow images={this.state.items.map(image => image.urls.regular)} duration={5} transition={3} />
            );
        }
    }
}

export default UnsplashApiLogin;
