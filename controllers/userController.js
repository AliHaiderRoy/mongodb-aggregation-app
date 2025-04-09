const User = require("../models/User");

// Get active users 
exports.getActiveUser = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $match: {
          isActive: true,
        },
      },
    ]);
    console.log("Active users: ", result); // Optionally log the result
    res.json(result); // Send active users as response
    console.log("Active users: ", result); // Optionally log the result
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error if any occurs
  }
};













// const User = require("../models/User")

// // Get active users 
// // exports.getCommentsPerUser = async (req, res) => {
// //     try {
// //       const result = await User.aggregate([
// //         { $group: { _id: "$user.id", totalComments: { $sum: 1 } } },
// //         { $sort: { totalComments: -1 } }
// //       ]);
// //       res.json(result);
// //     } catch (error) {
// //       res.status(500).json({ error: error.message });
// //     }
// //   };
// //   console.log("Comment controller loaded",this.getCommentsPerUser);
  
  
// // Get active users 
// exports.getActiveUser = async (req, res) => {
//     try {
//         const result = await User.aggregate(
//             [
//                 {
//                   $match: {
//                     isActive: true
//                   }
//                 }
//               ]
//         )
//       res.json(result);
//       console.log("hi ",User )

//     } catch (error) {
//         res.status(500).json({ error:error.message })
//     }
//   };
//   console.log("User controller loaded",this.getActiveUser);
  