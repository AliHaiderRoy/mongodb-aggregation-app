const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  id: Number,
  title: String,
  body: String,
  tags: [String],
  reactions: {
    likes: Number,
    dislikes: Number
  },
  views: Number,
  createdAt: { type: Date, default: Date.now },
  userId: Number
});

module.exports = mongoose.model("Post", PostSchema);

console.log("Post model created", PostSchema);
// ✅ Repeat this for models/Cart.js, models/Comment.js, models/Post.js, models/Product.js, models/Todo.js, models/Quote.js, models/Recipe.js, and models/Student.js.