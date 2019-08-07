// Set up
require('dotenv').config();

// Dependencies
const express = require("express");
// const cookieParser = require("cookie-parser");
// const flash = require("express-flash-messages");
const session = require("express-session");
const passport = require("passport")

const app = express();
const PORT = process.env.PORT || 5000

// Here we bring in our models 
const db = require("./models")

// Here we bring in our routes at the index
const routes = require("./routes")

// Middleware
// We pass the passport library as a parameter to the function in config/passport.js to start the local strategy
require("./config/passport")(passport)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

// // Cookie parser
// app.use(cookieParser());
// app.use(flash());

// We use this to keep the user logged in during a session
app.use(session({
    // Use dotenv dependency to hide secret
    key: 'user_sid',
    secret: "Surf Dogs",
    resave: true,
    saveUninitialized: false,
    cookie: {
        expires: 10800000, // 3 hrs
        httpOnly: false
    }
}));

// Initialize passport authentication
app.use(passport.initialize());

// Persistent login sessions. Session expires after something or when deleted by user
app.use(passport.session())

// // enable CORS so that browsers don't block requests.
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://localhost:4815");
//     res.header("Access-Control-Allow-Credentials", 'true');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
// });

// Routes
app.use(routes)

// Add sequelize connection
// Sync sequelize with our database models. We set force to true to reset database each time for development. 
//! REMOVE FORCE TRUE DURING PRODUCTION!
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`API server now listening on PORT ${PORT} `)
    })
})
