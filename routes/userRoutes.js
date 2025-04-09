const express = require("express");
const router = express.Router(); // Create a router instance
const { getActiveUser } = require("../controllers/userController"); // Import the controller

// Define the route to get active users
router.get("/active-user", getActiveUser);

// Export the router so it can be used in the server
module.exports = router;




// const express = require("express");
// const router = express.Router();
// // const { getCommentsPerUser, getTopLikedComments, getRecentComments } = require("../controllers/commentController");
// const { getActiveUser } = require("../controllers/userController");


// router = express.Router("/active-user", getActiveUser )

// // router.get("/comments-per-user", getCommentsPerUser);
// // router.get("/top-liked-comments", getTopLikedComments);
// // router.get("/recent-comments", getRecentComments);

// // console.log("Routes loaded", getCommentsPerUser, getTopLikedComments, getRecentComments);


// module.exports = router;
// //  Repeat for routes/postRoutes.js, routes/todoRoutes.js, routes/userRoutes.js.
