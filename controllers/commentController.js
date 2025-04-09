
// Get total comments per user
exports.getCommentsPerUser = async (req, res) => {
  try {
    const result = await User.aggregate([
      { $group: { _id: "$user.id", totalComments: { $sum: 1 } } },
      { $sort: { totalComments: -1 } }
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
console.log("Comment controller loaded",this.getCommentsPerUser);



// const Comment = require("../models/Comment");

//// Get total comments per user
// exports.getCommentsPerUser = async (req, res) => {
//   try {
//     const result = await Comment.aggregate([
//       { $group: { _id: "$user.id", totalComments: { $sum: 1 } } },
//       { $sort: { totalComments: -1 } }
//     ]);
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// console.log("Comment controller loaded",this.getCommentsPerUser);

//  //// Get top 5 most liked comments  
// exports.getTopLikedComments = async (req, res) => {
//   try {
//     const result = await Comment.aggregate([
//       { $sort: { likes: -1 } },
//       { $limit: 5 },
//       { $project: { body: 1, likes: 1, "user.username": 1 } }
//     ]);
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// console.log("Comment controller loaded",this.getTopLikedComments);

// //// Get comments from the last 30 days
// exports.getRecentComments = async (req, res) => {
//   try {
//     const last30Days = new Date();
//     last30Days.setDate(last30Days.getDate() - 30);

//     const result = await Comment.aggregate([
//       { $match: { createdAt: { $gte: last30Days } } },
//       { $sort: { createdAt: -1 } }
//     ]);
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// console.log("Comment controller loaded",this.getRecentComments);

 //// Repeat similar aggregation functions in controllers/postController.js, controllers/todoController.js, and controllers/userController.js.

