var mongoose = require("mongoose");

var userKeepSchema = new mongoose.Schema({
  email: String,
  picture: String,
});

module.exports = mongoose.model("userKeep", userKeepSchema);
