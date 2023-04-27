const router = require("express").Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/customer/:drugCode", CustomerController.searchDrugByDrugCode);
module.exports = router;
