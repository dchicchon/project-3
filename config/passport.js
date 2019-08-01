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
    ));
}

// Generate hash for password
function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSalt(8), null);
};