const express = require("express");
const router = express.Router();
const db = require("../../models")
// const postController = require("../../controllers/post-controller")

router.post("/post", (req, res) => {
    console.log("We hit the post route")
    console.log("REQ BODY:", req.body)

    // postController.addPost({
        
    // })
})
