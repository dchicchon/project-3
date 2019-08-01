const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../models");
const bCrypt = require("bcrypt-nodejs");

module.exports = () => {
    passsport.serializeUser((user, cb) => {
        cb(null, user.id);
    })

    passport.deserializeUser((id, cb) => {
        db.User.findId(id, (err, user) => {
            if (err) { return cb(err) };
            cb(null, user);
        })
    })

    // Sign up config

    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passportField: "local_pw",
        passReqToCallback: "true" // allows us to pass back the entire request to the callback
    },
        (req, email, local_pw, done) => {
            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(() => {
                db.User.findOne({
                    where: {
                        email: email
                    }
                })
                    .then((user, err) => {
                        if (err) {
                            return done(err)
                        }

                        // check to see if there is already a user with that email
                        if (user) {
                            return done(null, false, req.flash("signupMessage", "That email is already taken."));
                        } else {
                            // if there is no user with that email
                            // create the user
                            db.User.create({
                                email: req.body.email,
                                local_pw: db.user.generateHash(local_pw)
                            })
                                .then((dbUser) => {
                                    // send post back to render
                                    return done(null, dbUser);
                                })
                                .catch((err) => {
                                    // handle error;
                                    console.log(err);
                                });
                        }
                    });
            });

        }));

    // Login Login
    passport.use("local-login", new LocalStrategy({
        // by default, local strategy uses username and local_pw, we will override with email
        usernameField: 'email',
        passwordField: 'local_pw',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        (req, email, local_pw, done) => { //callback with email and local_pw from our form
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then((user, err) => {
                // if there are any errors, return the error before anything else
                if (err) {
                    console.log("err", err);
                    return done(err);
                }
                // if no user is found, return the message
                if (!user) {
                    return done(null, false, "No user found.");
                }
                // if the user is found but the local_pw is wrong
                if (!user.validPassword(req.body.local_pw, user.local_pw)) {
                    return done(null, false, "invalid email / password combination.");
                }
                // all is well, return successful user
                return done(null, user);
            });
        }));
};