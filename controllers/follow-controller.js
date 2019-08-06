const db = require("../models")

module.exports = {
    // This adds a follower
    addFollow: (req, res) => {
        console.log("INSIDE FOLLOW ADD CONTROLLER")
        console.log("REQ BODY", req.body)
        db.Followers.create({
            user_id: req.body.user_id,
            follower_id: req.body.follow_id
        }).then(dbFollower => {
            res.json(dbFollower)
        })
    },
    // This gets the people that the user is following
    getFollowing: (req,res) => {
        console.log(`\nIN GET FOLLOW METHOD`)
        console.log(`\nREQ PARAMS:`, req.params.id)
        db.Followers.findAll(
            {
                where: {user_id: req.params.id}
            }
        ).then(dbFollowers => {
            console.log(dbFollowers)
            return res.json(dbFollowers)
        })
    }
}