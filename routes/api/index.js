const router = require("express").Router();

// User Routes
const UserRoutes = require("./user");
const PostRoutes = require("./post")
// User Registration Routes

router.use(PostRoutes)
router.use(UserRoutes);

module.exports = router;

