const router = require("express").Router();
const userController = require("../../controllers/user-controller");

// /api/user

router.route("/user")
    // .get(userController.getUser)
    // .post(userController.addUser)
    .put(userController.editUser)

router.route("/user/:id")
    .get(userController.getUser)

module.exports = router