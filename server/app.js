require("dotenv").config();

const config = require("./config.json");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.set("jwt-secret", config.secret);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", require("./routes/api"));

const port = process.env.PORT || 8080;

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost/balloon-react-local");

app.listen(port, function () {
  console.log("Express server has started on port " + port);
});

// 유저정보 초기화시 (로컬 테스트용)
// const User = require("./models/user");
// if (config.databaseUsersReset) {
//   const userList = require("./data/demoData/user-list-2020");

//   for (let i = 0; i < userList.length; i++) {
//     const newUser = new User();
//     const thisUser = userList[i];

//     newUser.name = thisUser.name;
//     newUser.englishName = thisUser.englishName;
//     newUser.email = thisUser.email;
//     newUser.branch = thisUser.branch;
//     newUser.part = thisUser.part;
//     newUser.team = thisUser.team;
//     newUser.leaderPart = thisUser.leaderPart;
//     newUser.phone = thisUser.phone;
//     newUser.tel = thisUser.tel;
//     newUser.picture = thisUser.picture;
//     newUser.balloonSize = 7;
//     newUser.googleId = null;
//     newUser.token = null;
//     newUser.admin = false;

//     newUser.save(function (err) {
//       if (err) {
//         throw err;
//       }
//     });
//   }
// }
