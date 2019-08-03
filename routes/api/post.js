const express = require("express");
const router = express.Router();
const db = require("../../models")

router.post("/post", (req, res) => {
    console.log("We hit the post route")
})
