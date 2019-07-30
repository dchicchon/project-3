const router = require("express").Router();
const registerRoutes = require("./register")

// User Login Routes

// User Registration Routes
router.use("/register", registerRoutes);

module.exports = router

