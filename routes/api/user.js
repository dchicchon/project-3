const router = require("express").Router();
const userController = require("../../controllers/user-controller");

// /api/user

router.route("/")
    .get(userController.get)
    .post(userController.add)
    .put(userController.edit)

module.exports = router