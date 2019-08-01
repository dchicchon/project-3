const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = () => {
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })

    passport.deserializeUser((id, cb) => {
        db.User.findId(id, (err, user) => {
            if (err) { return cb(err) };
            cb(null, user);
        })
    })

    // Sign up config
    // ================================

    passport.use('local-signup', new LocalStrategy({
        // Might need to change this to email
        usernameField: 'username',
        passportField: 'password',
        passReqToCallback: true
    },
        (req, username, password, done) => {
            db.User.find({
                where: {
                    email: email
                }
            }, (err, user) => {
                if (err) {
                    console.log(`Error ${err}`)
                }

                if (user !== null) {
                    console.log("Username is already taken.", user);
                    return done(null, false, { message: "Username is already taken." })
                }

                const hashedPassword = generateHash(req.body.password);
                const newUser = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashedPassword,
                }
                db.User.create(newUser)
                    .then(dbUser => {
                        if (!dbUser) {
                            return done(null, false);
                        } else {
                            return done(null, dbUser)
                        }
                    })
            });
        }
    ));

    // Login Configuration
    //============================

    passport.use("local-login", new LocalStrategy({
        // Might need to change this to email
        userField: 'email',
        passwordField: "password",
        passReqToCallback: true
    },
    (req, email, password, done) => {
        db.User.find({
            where: {
                email: email
            }
        }, (err, user) => {
            if(err) {
                console.log(`Error: ${err}`)
                return done(err)
            }

            if (!user) {
                console.log(`No user found. ${user}`)
                return done(null, false, {
                    message: "No user found"
                });
            }

            if(!bcrypt.compareSync(password, user.password)) {
                console.log("Invalid password.");
                return done(null, false, {
                    message: "Invalid password"
                });
            }

            console.log(`Success! ${user}`);
            return done(null)
        })
    }
    ))

//     passport.use("local-register", new LocalStrategy({
//         usernameField: "email",
//         passportField: "password",
//         passReqToCallback: "true" // allows us to pass back the entire request to the callback
//     },
//         (req, email, password, done) => {
//             // asynchronous
//             // User.findOne wont fire unless data is sent back
//             process.nextTick(() => {
//                 db.User.find({
//                     where: {
//                         email: email
//                     }
//                 })
//                     .then((user, err) => {
//                         if (err) {
//                             return done(err)
//                         }

//                         // check to see if there is already a user with that email
//                         if (user) {
//                             return done(null, false, req.flash("signupMessage", "That email is already taken."));
//                         } else {
//                             // if there is no user with that email
//                             // create the user
//                             db.User.create({
//                                 email: req.body.email,
//                                 password: db.User.generateHash(local_pw)
//                             })
//                                 .then((dbUser) => {
//                                     // send post back to render
//                                     return done(null, dbUser);
//                                 })
//                                 .catch((err) => {
//                                     // handle error;
//                                     console.log(err);
//                                 });
//                         }
//                     });
//             });

//         }));

//     // Login Login
//     passport.use("local-login", new LocalStrategy({
//         // by default, local strategy uses username and local_pw, we will override with email
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true // allows us to pass back the entire request to the callback
//     },
//         (req, email, password, done) => { //callback with email and local_pw from our form
//             // find a user whose email is the same as the forms email
//             // we are checking to see if the user trying to login already exists
//             db.User.find({
//                 where: {
//                     email: email
//                 }
//             }).then((user, err) => {
//                 // if there are any errors, return the error before anything else
//                 if (err) {
//                     console.log("err", err);
//                     return done(err);
//                 }
//                 // if no user is found, return the message
//                 if (!user) {
//                     return done(null, false, "No user found.");
//                 }
//                 // if the user is found but the local_pw is wrong
//                 if (!user.validPassword(password, user.password)) {
//                     return done(null, false, "invalid email / password combination.");
//                 }
//                 // all is well, return successful user
//                 return done(null, user);
//             });
//         }));
// };