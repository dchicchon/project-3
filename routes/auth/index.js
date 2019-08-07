const express = require("express");
const router = express.Router();
const passport = require("passport");
const Cookies = require("js-cookie")
const db = require("../../models");

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        const currentUser = req.session.passport.user;
        console.log(`Current User:`, currentUser);
        db.User.findOne({
            where: {
                // we may have to change this later because this might cause an error
                id: currentUser
            }
        }).then(dbUser => {

            // If they are authenticated, we will return an object of user which will contain the values of TRUE for loggedIn and their username
            const user = {
                loggedIn: true,
                id: dbUser.id,
                firstName: dbUser.firstName,
                lastName: dbUser.lastName,
                image: dbUser.image
            }
            res.json(user);
        })
    } else {
        // If they are not authenticated, we will return an object of noUser which will contain the values of FALSE for logged in and no username
        const noUser = {
            isLoggedin: false,
            username: ''
        }
        res.json(noUser)
    }
});

// Route to authenticate user sign up
// ================================

router.post("/signup", (req, res, next) => {
    console.log("\nIN THE SIGNUP ROUTE")
    console.log(req.body)
    passport.authenticate("local-signup", (err, user, info) => {
        // console.log("\nmessage", info);
        console.log(`\nuser`, user.dataValues)
        if (err) {
            console.log(`Error: ${err}`);
            return next(err)
        }

        if (!user) {
            console.log("Not a user");
            return res.send("Please re-enter your username and password");
        }

        // ASK JACOB ABOUT THIS
        // I think this is how we allow users to login after they register
        console.log("We are about to login the user")
        req.login(user, err => {
            if (err) {
                console.log("auth error");
                return next(err);
            }

            // This might cause an error because we are not using usernames in our database
            // This is the user!
            console.log("User logged in!")
            // console.log(req.user.DataValues.firstName)
            console.log(req.user.firstName)
            console.log(req.user.lastName)
            console.log(req.user.email)
            console.log(req.user.id)


            // res.cookie("firstName", req.user.DataValues.firstName);
            Cookies.set('id', req.user.id)
            // res.cookie("firstName", req.user.firstName);
            // res.cookie("lastName", req.user.lastName);
            // res.cookie("email", req.user.email);
            // res.cookie("id", req.user.id);
            // res.cookie("profileImg", req.user.profileImg);
            return res.redirect('/');
        });
    })(req, res, next);
});

// Route to authenticate user login
// =================================

router.post('/login', (req, res, next) => {
    console.log("\nIN THE LOGIN ROUTE")
    console.log(req.body)
    passport.authenticate("local-login", (err, user, info) => {
        console.log("\nuser:", user.dataValues)
        if (err) {
            console.log(`Error: ${err}`)
            return next(err);
        }

        if (!user) {
            console.log("Not a user")
            return res.send("Please re-enter your username and password")
        }

        req.login(user, (err) => {
            if (err) {
                console.log("auth error");
                return next(err);
            }

            // Might have to change this to match our model
            console.log(user)
            res.cookie("firstName", req.user.firstName);
            res.cookie("lastName", req.user.lastName);
            res.cookie("email", req.user.email);
            res.cookie("id", req.user.id);
            res.cookie("image", req.user.image);
            // res.cookie('user_id', user._id);
            var userI = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                image: user.image
            }
            return res.json(userI);
        });
    })(req, res, next);
});

// Route to handle logout
router.get('/logout', function (req, res) {
    // Here we stop the session so that the user is not logged in each time for the pages
    console.log("LOGOUT CONTROL")
    req.logout()
    console.log(`Current User` + req.user)
    if (!req.user) {
        Cookies.remove('user_sid')
        Cookies.remove('id')
        Cookies.remove('username')
        // res.clearCookie('email')
        // res.clearCookie('firstName')
        // res.clearCookie('lastName')
        // res.clearCookie('id');
        // res.clearCookie("connect.sid")
        // res.clearCookie("user_sid")
        // res.clearCookie("profileImg")
        res.redirect("/")
    } else {
        res.status(200).json({
            logout: false,
            'message': 'failed logout'
        });
    }
});

module.exports = router;