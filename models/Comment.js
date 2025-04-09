
const mongoose = require("mongoose"); 

const CommentSchema = new mongoose.Schema({
  id: Number,
  body: String,
  postId: Number,
  likes: Number,
  createdAt: { type: Date, default: Date.now },
  user: {
    id: Number,
    username: String,
    fullName: String
  }
});

// console.log("Comment model created", CommentSchema);

module.exports = mongoose.model("Comment", CommentSchema);


