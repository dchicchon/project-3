// //unsplash api slideshow for login and signup

//---------trial without react------------

var request = require('request');
var apiurl = 'https://api.unsplash.com/search/photos?page=1&query=travel&client_id=key'

request({ url: apiurl }, function (err, res) {
    if (err) console.log(err.message);
    else if (res) {
        // console.log(res);
        var search = JSON.parse(res.body)
        console.log(JSON.stringify(search.results[1],null, ""));
        search.results.forEach((e) => {
        console.log(e.description);
        console.log(e.urls.regular);
    });
    }
});
