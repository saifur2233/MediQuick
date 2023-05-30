const router = require("express").Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/customer/:drugCode", CustomerController.searchDrugByDrugCode);
router.get("/testdata", CustomerController.testdata);
router.get("/drug-journey/:drugCode", CustomerController.getDrugJourneyDetails);

module.exports = router;
