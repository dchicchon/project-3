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
            console.log("\nDESERIALIZE USER:", user.dataValues)
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
            console.log("\nLOCAL-SIGNUP STRATEGY HIT")
            var passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(8))
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (user) {
                    console.log("\nUser already exists")
                    return done(null, false, {
                        message: "That email is already taken"
                    })
                } else {
                    console.log("\nUser does not exist")
                    console.log("\nCREATING NEW USER IN PASSPORT.JS")
                    console.log(req.body)
                    var data = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: passwordHash,
                        image: req.body.image
                    }
                    console.log(`WE HAVE DATA:`, data)
                    db.User.create(data).then(newUser => {
                        console.log(`Inside db.User.create`, newUser.dataValues)
                        if (!newUser) {
                            console.log(`A new User was not created`)
                            return done(null, false)
                        }
                        if (newUser) {
                            console.log(`New User create!`, newUser.dataValues)
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
        usernameField: 'email',
        passwordField: "password",
        passReqToCallback: true
    },
        (req, email, password, done) => {
            console.log("\nLOCAL-LOGIN STRATEGY HIT")
            console.log("\nREQ BODY:", req.body)
            const isValidPassword = (userpass, password) => {
                return bcrypt.compareSync(password, userpass)
            }

            console.log("FINDONE IN DB")
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (!user) {
                    console.log(`No user found. `, user.dataValues)
                    return done(null, false, {
                        message: "No user found"
                    });
                }

                if (!isValidPassword(user.password, password)) {
                    console.log("\nIncorrect password")
                    return done(null, false, {
                        message: 'Incorrect Password'
                    })
                }

                var userInfo = user.get()
                console.log(`\nSuccess with logging in user!`);
                return done(null, userInfo)
            }).catch((err) => {
                console.log("Error:", err)
                return done(null, false, {
                    message: "Something went wrong with your signin"
                })
            })
        }
    ));
}