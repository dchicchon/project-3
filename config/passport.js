const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = () => {
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })

    passport.deserializeUser((id, cb) => {
        db.User.findOne({
            where: {
                id: id
            }
        }).then(user => {
            console.log("DESERIALIZE USER")
            cb(null, user)
        });
    });

    // Sign up config
    // ================================

    passport.use('local-signup', new LocalStrategy({
        // Might need to change this to email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        (req, email, password, done) => {
            console.log("SOMETHING IN PASSPORT.JS IS HAPPENING")
            var passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(8))
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (user) {
                    console.log("User already exists")
                    return done(null, false, {
                        message: "That email is already taken"
                    })
                } else {
                    console.log("User does not exist")
                    var data = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: passwordHash
                    }
                    console.log(`WE HAVE DATA: ${data}`)
                    db.User.create(data).then(newUser => {
                        console.log(`Inside db.User.create`, newUser)
                        if (!newUser) {
                            console.log(`A new User was not created`)
                            return done(null, false)
                        }
                        if (newUser) {
                            console.log(`New User create!`, newUser)
                            return done(null, newUser)
                        }
                    });
                }
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
                if (err) {
                    console.log(`Error: ${err}`)
                    return done(err)
                }

                if (!user) {
                    console.log(`No user found. ${user}`)
                    return done(null, false, {
                        message: "No user found"
                    });
                }

                if (!bcrypt.compareSync(password, user.password)) {
                    console.log("Invalid password.");
                    return done(null, false, {
                        message: "Invalid password"
                    });
                }

                console.log(`Success! ${user}`);
                return done(null)
            })
        }
    ));
}

// Generate hash for password
// function generateHash(password) {
    // return bcrypt.hashSync(password, bcrypt.genSalt(8), null);
// };