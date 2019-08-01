const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../../models");

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        const currentUser = req.session.passport.user;
        console.log(`Current User: ${currentUser}`);
        db.User.find({
            where: {

                // we may have to change this later because this might cause an error
                email: currentUser
            }
        }).then(dbUser => {

            // If they are authenticated, we will return an object of user which will contain the values of TRUE for loggedIn and their username
            const user = {
                loggedIn: true,
                username: dbUser.username
            }
            res.json(user);
        })
    } else {
        // If they are not authenticated, we will return an object of noUser which will contain the values of FALSE for logged in and no username
        const noUser = {
            loggedIn: false,
            username: ''
        }
        res.json(noUser)
    }
});

// Route to authenticate user sign up
// ================================

router.post("/signup", (req, res, next) => {
    passport.authenticate("local-signup", (err, user) => {
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
        req.login(user, err => {
            if (err) {
                console.log("auth error");
                return next(err);
            }

            // This might cause an error because we are not using usernames in our database
            res.cookie("username", req.user.username);
            // res.cookie("user_id", req.user.id);
            return res.redirect('/')
        });
    })(req, res, next);
});

// Route to authenticate user login
// =================================

router.post('/login', (req, res, next) => {
    passport.authenticate("local-login", (err, user) => {
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
            res.cookie('username', user.username);
            // res.cookie('user_id', user._id);
            var userI = { username: user.username }
            return res.json(userI);
        });
    })(req, res, next);
});

// Route to handle logout
router.get('/logout', function (req, res) {
    // Here we stop the session so that the user is not logged in each time for the pages
    req.session.destroy(function (err) {
        if (err) {
            console.log(`Error: ${err}`)
        }

        // Here we clear the cookies from the browser
        // res.clearCookie("user_id")
        res.clearCookie(username);
        res.clearCookie(connect.sid);
        res.redirect('/');
    });
});

module.exports = router;