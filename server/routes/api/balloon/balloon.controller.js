const moment = require("moment-timezone");
const config = require("../../../config.json");
const mailer = require("../../../mail/mail-sender");

const User = require("../../../models/user");
const Message = require("../../../models/message");
const { json } = require("body-parser");

// [GET] 모든 유저 정보 조회
exports.users = (req, res) => {
  User.find(function (err, users) {
    if (err)
      return res
        .status(500)
        .json({ result: false, message: "정보 조회에 실패 했습니다." });
    res.json({ result: true, data: users });
  });
};

// [GET] 로그인한 사용자 정보 조회
exports.user = (req, res) => {
  User.findById(req.decoded._id, function (err, user) {
    if (err)
      return res
        .status(500)
        .json({ result: false, message: "정보 조회에 실패 했습니다." });
    if (!user)
      return res
        .status(404)
        .json({ result: false, message: "유저를 찾을 수 없습니다." });

    // 이번 달 칭찬한 사람 데이터 조회
    const startOfDate = moment().startOf("month").format("YYYY-MM-DD");
    const endOfDate = moment().endOf("month").format("YYYY-MM-DD");

    Message.find(
      {
        $and: [
          {
            date: {
              $gte: new Date(startOfDate),
              $lt: new Date(endOfDate),
            },
          },
          { senderEmail: user.email },
        ],
      },
      function (err, messages) {
        if (err)
          return res
            .status(500)
            .json({ result: false, message: "정보 조회에 실패 했습니다." });
        res.json({ result: true, data: user, messagesData: messages });
      }
    );
  });
};

// [PUT] 로그인한 사용자의 사진 URL이 DB와 다르면 업데이트
exports.picture = (req, res) => {
  User.findById(req.decoded._id, function (err, user) {
    if (err)
      return res
        .status(500)
        .json({ result: false, message: "정보 조회에 실패 했습니다." });
    if (!user)
      return res
        .status(404)
        .json({ result: false, message: "유저를 찾을 수 없습니다." });

    if (req.body.picture) user.picture = req.body.picture;

    user.save(function (err) {
      if (err)
        return res
          .status(500)
          .json({ result: false, message: "사진 업데이트에 실패 했습니다." });
      res.status(200).json({ result: true, picture: user.picture });
    });
  });
};

// [POST] 칭찬 메세지 보내기
exports.message = (req, res) => {
  User.findById(req.decoded._id, function (err, user) {
    if (err)
      return res
        .status(500)
        .json({ result: false, message: "정보 조회에 실패 했습니다." });
    if (!user)
      return res
        .status(404)
        .json({ result: false, message: "유저를 찾을 수 없습니다." });
    if (!user.balloonSize)
      return res.status(404).json({
        result: false,
        message: "사용 가능한 풍선이 부족합니다.",
        balloonSize: user.balloonSize,
      });
    if (user.email === req.body.receiverEmail)
      return res.status(404).json({
        result: false,
        message: "자신에게 메시지를 보낼 수 없습니다.",
      });

    const startOfDate = moment().startOf("month").format("YYYY-MM-DD");
    const endOfDate = moment().endOf("month").format("YYYY-MM-DD");

    Message.find(
      {
        $and: [
          {
            date: {
              $gte: new Date(startOfDate),
              $lt: new Date(endOfDate),
            },
          },
          { senderEmail: user.email },
        ],
      },
      function (err, messages) {
        const receivers = messages.map((message) => message.receiverEmail);
        const isExist = receivers.includes(req.body.receiverEmail);

        if (err)
          return res
            .status(500)
            .json({ result: false, message: "정보 조회에 실패 했습니다." });
        if (isExist)
          return res.status(404).json({
            result: false,
            message: "이미 이번 달 메시지를 보낸 대상입니다.",
          });

        const message = makeMessage(new Message(), req);

        message.save(function (err) {
          if (err)
            return res
              .status(500)
              .json({ result: false, message: "메시지 전송에 실패 했습니다." });
          user.balloonSize--;
          user.save();
          res.status(200).json({ result: true, balloonSize: user.balloonSize });

          if (config.isMailSend)
            mailer.sendEmail(req.body.receiverEmail, req.body.receiverBranch);
        });
      }
    );
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
