module.exports = function ({ app, Feedback, Message, OpenComment, User, UserKeep }) {
  // [GET] 유저 정보 조회
  app.get("/api/users", function (req, res) {
    User.find((err, users) => {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(users);
    });
  });

  // [GET] 로그인한 사용자 정보 조회
  app.get("/api/users/:email", function (req, res) {
    User.findOne({ email: req.params.email }, function (err, user) {
      if (err) return res.status(500).json({ error: err });
      if (!user) return res.status(404).json({ error: "user not found" });
      res.json(user);
    });
  });
};
