const mongoose = require("mongoose");

const userKeepSchema = new mongoose.Schema({
  email: String,
  picture: String,
});

module.exports = mongoose.model("userKeep", userKeepSchema);
