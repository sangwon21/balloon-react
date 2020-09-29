const router = require("express").Router();
const controller = require("./balloon.controller");

router.get("/users", controller.users);
router.get("/user/:email", controller.user);
router.put("/user/picture/:email", controller.picture);
router.post("/message", controller.message);

module.exports = router;
