const config = require("./config.json");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const Feedback = require("./models/Feedback");
const Message = require("./models/message");
const OpenComment = require("./models/open-comment");
const User = require("./models/user");
const UserKeep = require("./models/user-keep");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

const router = require("./routes")({ app, Feedback, Message, OpenComment, User, UserKeep });

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost/balloon-react-local");

const server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});

// 유저정보 초기화시.
if (config.databaseUsersReset) {
  const userList = require("./data/demoData/user-list");

  for (let i = 0; i < userList.length; i++) {
    const newUser = new User();
    const thisUser = userList[i];

    newUser.name = thisUser.name;
    newUser.email = thisUser.email;
    newUser.branch = thisUser.branch;
    newUser.part = thisUser.part;
    newUser.team = thisUser.team;
    newUser.leaderPart = thisUser.leaderPart;
    newUser.phone = thisUser.phone;
    newUser.tel = thisUser.tel;
    newUser.picture = thisUser.picture;
    newUser.balloonSize = 7;
    newUser.englishName = null;
    newUser.googleId = null;
    newUser.token = null;

    newUser.save(function (err) {
      if (err) {
        throw err;
      }
    });
  }
}
