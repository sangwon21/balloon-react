const moment = require("moment-timezone");

const User = require("../../../models/user");
const Message = require("../../../models/message");

// [GET] 모든 유저 정보 조회
exports.users = (req, res) => {
  User.find(function (err, users) {
    if (err) return res.status(500).json({ result: false, message: "database failure" });
    res.json({ result: true, data: users });
  });
};

// [GET] 로그인한 사용자 정보 조회
exports.user = (req, res) => {
  User.findById(req.decoded._id, function (err, user) {
    if (err) return res.status(500).json({ result: false, message: "database failure" });
    if (!user) return res.status(404).json({ result: false, message: "user not found" });
    res.json({ result: true, data: user });
  });
};

// [PUT] 로그인한 사용자의 사진 URL이 DB와 다르면 업데이트
exports.picture = (req, res) => {
  User.findById(req.decoded._id, function (err, user) {
    if (err) return res.status(500).json({ result: false, message: "database failure" });
    if (!user) return res.status(404).json({ result: false, message: "user not found" });
    if (req.body.picture) user.picture = req.body.picture;

    user.save(function (err) {
      if (err) return res.status(500).json({ result: false, message: "failed to update" });
      res.status(200).json({ result: true, picture: user.picture });
    });
  });
};

// [POST] 칭찬 메세지 보내기
exports.message = (req, res) => {
  User.findById(req.decoded._id, function (err, user) {
    if (err) return res.status(500).json({ result: false, message: "database failure" });
    if (!user) return res.status(404).json({ result: false, message: "user not found" });
    if (!user.balloonSize) return res.status(404).json({ result: false, message: "not enough balloons", balloonSize: user.balloonSize });

    const message = makeMessage(new Message(), req);
    user.balloonSize--;

    message.save(function (err) {
      if (err) return res.status(500).json({ result: false, message: "failed to send message" });
      user.save();
      res.status(200).json({ result: true, balloonSize: user.balloonSize });
    });
  });
};

const makeMessage = (obj, req) => {
  obj.date = moment().tz("Asia/Seoul").toDate().toISOString();
  obj.isSecret = req.body.isSecret;
  obj.message = req.body.message;
  obj.receiverEmail = req.body.receiverEmail;
  obj.receiverName = req.body.receiverName;
  obj.receiverPicture = req.body.receiverPicture || null;
  obj.senderEmail = req.body.senderEmail;
  obj.senderName = req.body.senderName;
  obj.senderPicture = req.body.senderPicture || null;
  return obj;
};
