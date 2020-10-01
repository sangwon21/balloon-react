const router = require("express").Router();
const auth = require("./auth");
const balloon = require("./balloon");
const authMiddleware = require("../../middlewares/auth");

router.use("/auth", auth);

router.use("/balloon", authMiddleware);
router.use("/balloon", balloon);

module.exports = router;
