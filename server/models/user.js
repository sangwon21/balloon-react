var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  googleId: String,
  token: String,
  email: String,
  name: String,
  englishName: String,
  picture: String,
  branch: String,
  part: String,
  team: String,
  leaderPart: String,
  phone: String,
  tel: String,
  balloonSize: Number,
  admin: Boolean,
});

module.exports = mongoose.model("user", userSchema);
