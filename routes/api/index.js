const router = require("express").Router();

// User Routes
const UserRoutes = require("./user");

// User Registration Routes
router.use("/user", UserRoutes);

module.exports = router

