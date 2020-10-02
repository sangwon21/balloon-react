const moment = require("moment-timezone");

const Feedback = require("../../../models/Feedback");
const Message = require("../../../models/message");
const OpenComment = require("../../../models/open-comment");
const User = require("../../../models/user");
const UserKeep = require("../../../models/user-keep");

// [GET] 모든 유저 정보 조회
exports.users = (req, res) => {
  User.find(function (err, users) {
    if (err) return res.status(500).json({ result: false, message: "database failure" });
    return res.json({ result: true, data: users });
  });
};

// [GET] 로그인한 사용자 정보 조회
exports.user = (req, res) => {
  User.findById(req.decoded._id, function (err, user) {
    if (err) return res.status(500).json({ result: false, message: "database failure" });
    if (!user) return res.status(404).json({ result: false, message: "user not found" });
    return res.json({ result: true, data: user });
  });
};

// [PUT] 로그인한 사용자의 사진 URL이 DB와 다르면 업데이트
exports.picture = (req, res) => {
  User.findById(req.decoded._id, function (err, user) {
    if (err) return res.status(500).json({ result: false, message: "database failure" });
    if (!user) return res.status(404).json({ result: false, message: "user not found" });

    if (req.body.picture) user.picture = req.body.picture;

    user.save(function (err) {
      if (err) res.status(500).json({ result: false, message: "failed to update" });
      res.status(200).json({ result: true, picture: user.picture });
    });
  });
};

// [POST] 칭찬 메세지 보내기
exports.message = (req, res) => {
  var message = new Message();

  message.date = moment().tz("Asia/Seoul").toDate().toISOString();
  message.isSecret = req.body.isSecret;
  message.message = req.body.message;
  message.receiverEmail = req.body.receiverEmail;
  message.receiverName = req.body.receiverName;
  message.receiverPicture = req.body.receiverPicture || null;
  message.senderEmail = req.body.senderEmail;
  message.senderName = req.body.senderName;
  message.senderPicture = req.body.senderPicture || null;

  message.save(function (err) {
    if (err) res.status(500).json({ result: false, message: "failed to send message" });
    res.status(200).json({ result: true });
  });
};
