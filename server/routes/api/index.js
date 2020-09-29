const router = require("express").Router();
const auth = require("./auth");
const balloon = require("./balloon");

router.use("/auth", auth);
router.use("/balloon", balloon);

module.exports = router;
