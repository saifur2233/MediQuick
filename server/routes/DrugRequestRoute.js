const router = require("express").Router();
const DrugRequestController = require("../controllers/DrugRequestController");

router.post("/drugrequest/send", DrugRequestController.sendDrugRequest);
router.get(
  "/drugrequest/sender/:senderEmail",
  DrugRequestController.getAllDrugRequestSender
);
router.get(
  "/drugrequest/receiver/:receiverEmail",
  DrugRequestController.getAllDrugRequestReceiver
);

module.exports = router;
