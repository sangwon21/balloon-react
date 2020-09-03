module.exports = function ({ app, Feedback, Message, OpenComment, User, UserKeep }) {
  // [GET] 유저 목록 데이터
  app.get("/api/users", function (req, res) {
    User.find(function (err, users) {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(users);
    });
  });

  // [POST] 유저 데이터 추가
  app.post("/api/users", function (req, res) {
    var user = new User();

    // book.title = req.body.title;
    // book.author = req.body.author;
    // book.published_date = new Date(req.body.published_date);

    // book.save(function (err) {
    //   if (err) {
    //     console.error(err);
    //     res.json({ result: 0 });
    //     return;
    //   }

    //   res.json({ result: 1 });
    // });
  });
};
