const router = require("express").Router();

// User Routes
const UserRoutes = require("./user");
const PostRoutes = require("./post");
const FollowRoutes = require("./follow")
// User Registration Routes

router.use(PostRoutes)
router.use(UserRoutes);
router.use(FollowRoutes);

module.exports = router;

