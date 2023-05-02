const router = require("express").Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/customer/:drugCode", CustomerController.searchDrugByDrugCode);
router.get("/testdata", CustomerController.testdata);

module.exports = router;
