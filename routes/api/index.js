const router = require("express").Router();

// User Routes
const UserRoutes = require("./user");
const PostRoutes = require("./post");
const FollowRoutes = require("./follow")
const DiscoverRoutes = require("./discover")
const FeedRoutes = require("./feed")
// User Registration Routes

router.use(PostRoutes)
router.use(UserRoutes);
router.use(FollowRoutes);
router.use(DiscoverRoutes);
router.use(FeedRoutes)

module.exports = router;

