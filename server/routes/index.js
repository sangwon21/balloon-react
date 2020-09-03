module.exports = function ({ app, Feedback, Message, OpenComment, User, UserKeep }) {
  // [GET] 유저 정보 조회
  app.get("/api/users", function (req, res) {
    User.find((err, users) => {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(users);
    });
  });
};
