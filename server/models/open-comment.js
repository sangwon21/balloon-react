const mongoose = require("mongoose");

const openCommentSchema = new mongoose.Schema({
  parentId: String,
  email: String,
  name: String,
  picture: String,
  message: String,
  date: Date,
  like: Array,
  dislike: Array,
});

module.exports = mongoose.model("openComment", openCommentSchema);
