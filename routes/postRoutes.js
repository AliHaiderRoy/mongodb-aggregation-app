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
