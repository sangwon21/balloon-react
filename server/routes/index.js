const moment = require("moment-timezone");

module.exports = function ({ app, Feedback, Message, OpenComment, User, UserKeep }) {
  // [GET] 모든 유저 정보 조회
  app.get("/api/users", function (req, res) {
    User.find((err, users) => {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(users);
    });
  });

  // [GET] 로그인한 사용자 정보 조회
  app.get("/api/user/:email", function (req, res) {
    User.findOne({ email: req.params.email }, function (err, user) {
      if (err) return res.status(500).json({ error: err });
      if (!user) return res.status(404).json({ error: "user not found" });
      res.json(user);
    });
  });

  // [PUT] 로그인한 사용자의 사진 URL이 DB와 다르면 업데이트
  app.put("/api/user/picture/:email", function (req, res) {
    User.findOne({ email: req.params.email }, function (err, user) {
      if (err) return res.status(500).json({ error: "database failure" });
      if (!user) return res.status(404).json({ error: "user not found" });

      if (req.body.picture) user.picture = req.body.picture;

      user.save(function (err) {
        if (err) res.status(500).json({ error: "failed to update" });
        res.json({ message: "user updated" });
      });
    });
  });

  // [POST] 칭찬 메세지 보내기
  app.post("/api/message", function (req, res) {
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
      if (err) {
        res.json({ status: 404 });
        return;
      }
      res.json({ status: 200 });
    });
  });
};
