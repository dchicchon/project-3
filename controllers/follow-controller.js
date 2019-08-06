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
    getFollowing: (req, res) => {
        console.log(`\nIN GET FOLLOW METHOD`)
        console.log(`\nREQ PARAMS:`, req.params.id)
        db.Followers.findAll(
            {
                where: { user_id: req.params.id }
            }
        ).then(dbFollowers => {
            console.log(`\nDB FOLLOWERS ID`)
            // console.log(dbFollowers[0].dataValues.follower_id)
            var followIdArr = []
            console.log(`FOLLOWER LENGTH`,dbFollowers.length)
            for (var i = 0; i < dbFollowers.length; i++) {
                var followId = dbFollowers[i].dataValues.follower_id
                followIdArr.push(followId)
                // console.log(`Following ID:`, followId)
                // followIdArr.push(dbFollowers[i].dataValues.follower_id)
            }
            console.log(`FOLLOW ARR`)
            console.log(followIdArr)
            db.Post.findAll(
                {
                    where: {
                        user_id: followIdArr
                    }
                }
            ).then((dbPosts) => {
                console.log("GET RESPONSE TO FIND FOLLOWING POSTS")
                var followingPosts = []
                for (var j = 0; j < dbPosts.length; j++) {
                    followingPosts.push(dbPosts[j].dataValues) 
                }
                console.log("\nFOLLOWING POSTS")
                console.log(followingPosts)
                return res.json(followingPosts)
            })
            // return res.json(dbFollowers)
        })
    }
}