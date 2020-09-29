const jwt = require("jsonwebtoken");

const User = require("../../../models/user");

// [POST] 로그인시 jwt 발행
exports.login = (req, res) => {
  const { email } = req.body;
  const secret = req.app.get("jwt-secret");

  const check = (user) => {
    if (!user) {
      throw new Error("login failed");
    } else {
      const p = new Promise((resolve, reject) => {
        jwt.sign(
          {
            _id: user._id,
            email: user.email,
            admin: user.admin,
          },
          secret,
          {
            expiresIn: "7d",
          },
          (err, token) => {
            if (err) reject(err);
            resolve(token);
          },
        );
      });
      return p;
    }
  };

  const respond = (token) => {
    res.json({
      message: "logged in successfully",
      token,
    });
  };

  const onError = (error) => {
    res.status(403).json({
      message: error.message,
    });
  };

  User.findOne({ email: email }).then(check).then(respond).catch(onError);
};

// [GET] jwt 토큰 검증
exports.check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};
