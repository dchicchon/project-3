// //unsplash api

// // var request = require('request');
// // var apiurl = 'https://api.unsplash.com/search/photos?page=1&query=travel&client_id=key'

// // request({ url: apiurl }, function (err, res) {
// //     if (err) console.log(err.message);
// //     else if (res) {
// //         // console.log(res);
// //         var search = JSON.parse(res.body)
// //         // console.log(JSON.stringify(search.results[1],null, ""));
// //         search.results.forEach((e) => {
// //         console.log(e.description);
// //         console.log(e.urls.regular);
// //     });
// //     }
// // });

import React, { Component } from 'react';

class UnsplashApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://api.unsplash.com/search/photos?page=1&query=birthday&client_id=15a3b12b4e320ca5f4b5bd3319c5e0c73401530b3953e3dc8f7352a0b5669001')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })

    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading....</div>;
        }
        else {
            return (
                <div>

                    Data has been loaded
            <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.name} | Email: {item.email}
                            </li>
                        ))};
                        }
            </ul>

                </div>
            );
        }


        export default UnsplashApi;
