const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.patch("/users/info/:email", UserController.updateUserInfo);

module.exports = router;
