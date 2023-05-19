const router = require("express").Router();
const AuthController = require("../controllers/AuthController");

router.post("/adminsignup", AuthController.adminSignup);
router.post("/adminsignin", AuthController.adminSignin);
router.post("/adminsearch", AuthController.adminSearch);
router.get("/adminByEmail/:email", AuthController.adminSearchByEmail);
router.post("/usersignup", AuthController.userSignup);
router.post("/usersignin", AuthController.userSignin);
router.post("/usersearch", AuthController.userSearch);
router.post("/checkDuplicateUser", AuthController.userAlreadyExist);
router.get("/allusers-info", AuthController.getAllUserInfo);
router.get("/user-search/:email", AuthController.getUserByEmail);
router.post(
  "/user/verify-signature",
  AuthController.verifyUserDigitalSignature
);
module.exports = router;
