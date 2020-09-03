var mongoose = require("mongoose");

var msgSchema = new mongoose.Schema({
  senderEmail: String,
  senderName: String,
  senderPicture: String,
  receiverEmail: String,
  receiverName: String,
  receiverPicture: String,
  isSecret: Boolean,
  message: String,
  date: Date,
});

module.exports = mongoose.model("message", msgSchema);
