const router = require("express").Router()
const postController = require("../../controllers/post-controller")
const db = require("../../models")

// router.get("/post", (req, res) => {
//     console.log("HERE WE GET POSTS")
//     console.log(req.body)
//     // postController.getPosts()
// })

// router.post("/post", (req, res) => {
//     console.log("We hit the post route")
//     console.log("REQ BODY:", req.body)
//     postController.addPost(req.body)
//     // .then(console.log("Added Post"))
// })

router.route("/post")
    .get(postController.getPosts)
    .post(postController.addPost)
    // .put(postController)
    // .delete(postController)

router.route("/post/:id")
    .get(postController.getPostsByUser)

module.exports = router;
