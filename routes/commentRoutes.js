const express = require("express");
const router = express.Router();
const { getCommentsPerUser, getTopLikedComments, getRecentComments } = require("../controllers/commentController");

router.get("/comments-per-user", getCommentsPerUser);
router.get("/top-liked-comments", getTopLikedComments);
router.get("/recent-comments", getRecentComments);

// console.log("Routes loaded", getCommentsPerUser, getTopLikedComments, getRecentComments);


module.exports = router;
//  Repeat for routes/postRoutes.js, routes/todoRoutes.js, routes/userRoutes.js.
