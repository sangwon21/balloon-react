const router = require("express").Router();
const controller = require("./balloon.controller");
const authMiddleware = require("../../../middlewares/auth");

// [GET] 모든 유저 정보 조회
router.get("/users", controller.users);

// [GET] 로그인한 사용자 정보 조회
router.get("/user/:email", controller.user);

// [PUT] 로그인한 사용자의 사진 URL이 DB와 다르면 업데이트
router.put("/user/picture/:email", controller.picture);

// [POST] 칭찬 메세지 보내기
router.use("/message", authMiddleware);
router.post("/message", controller.message);

module.exports = router;
