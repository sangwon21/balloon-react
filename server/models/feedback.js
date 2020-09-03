var mongoose = require("mongoose");

var feedbackSchema = new mongoose.Schema({
  type: String,
  email: String,
  name: String,
  picture: String,
  message: String,
  date: Date,
});

module.exports = mongoose.model("feedback", feedbackSchema);
