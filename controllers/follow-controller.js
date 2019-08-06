const db = require("../models")

module.exports = {
    addFollow: (req, res) => {
        console.log("INSIDE FOLLOW CONTROLLER")
        console.log("REQ BODY", req.body)
        db.Followers.create({
            user_id: req.body.user_id,
            follower_id: req.body.follow_id
        }).then(dbFollower => {
            res.json(dbFollower)
        })
    }
}