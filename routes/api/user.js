const router = require("express").Router();
const userController = require("../../controllers/user-controller");

// /api/user

router.route("/")
    .get(userController.getUser)
    .post(userController.addUser)
    .put(userController.editUser)

module.exports = router