const router = require("express").Router();
const postController = require("../../controllers/post-controller")
// const db = require("../../models")

router.route("/discover/:tag")
    .get(postController.getPostSearch)

module.exports = router

