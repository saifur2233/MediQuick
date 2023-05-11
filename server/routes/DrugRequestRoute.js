const router = require("express").Router();
const DrugRequestController = require("../controllers/DrugRequestController");

router.post("/drugrequest/send", DrugRequestController.sendDrugRequest);

module.exports = router;
