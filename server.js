const express = require("express");

const cookieParser = require("cookie-parser");
const flash = require("express-flash-messages");
const session = require("express-session");
const passport = require("passport")

const app = express();
const routes = require("./routes")
const PORT = process.env.PORT || 4815

const db = require("./models")

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

// Cookie parser
app.use(cookieParser());
app.use(flash());
require("./config/passport")(passport)

app.use(session({
    // Use dotenv dependency to hide secret
    secret: "Guitar Dog",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 299999999999,
        httpOnly: false
    }
}));

// Initialize passport authentication
app.use(passport.initialize());

// Persistent login sessions. Session expires after something or when deleted by user
app.use(passport.session())

// enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://localhost:4815");
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Routes
app.use(routes)

// Add sequelize connection
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`API server now listening on PORT ${PORT} `)
    })
})
