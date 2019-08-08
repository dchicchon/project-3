const router = require("express").Router();

// User Routes
const UserRoutes = require("./user");
const PostRoutes = require("./post");
const FollowRoutes = require("./follow")
const DiscoverRoutes = require("./discover")
// User Registration Routes

router.use(PostRoutes)
router.use(UserRoutes);
router.use(FollowRoutes);
router.use(DiscoverRoutes);

module.exports = router;

