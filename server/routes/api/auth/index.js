const router = require("express").Router();
const controller = require("./auth.controller");
const authMiddleware = require("../../../middlewares/auth");

// [GET] 로그인시 jwt 발행
router.get("/login", controller.login);

// [GET] jwt 토큰 검증
router.use("/check", authMiddleware);
router.get("/check", controller.check);

module.exports = router;
