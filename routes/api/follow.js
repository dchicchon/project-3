const router = require("express").Router();
const followController = require("../../controllers/follow-controller")
const db = require("../../models")

router.route("/follow")
    .post(followController.addFollow)

module.exports = router