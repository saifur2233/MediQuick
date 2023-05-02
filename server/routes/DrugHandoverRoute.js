const router = require("express").Router();
const DrugHandoverController = require("../controllers/DrugHandoverController");

router.post(
  "/drug-supplychain/addHandover",
  DrugHandoverController.addDrugHandoverData
);
router.get(
  "/Handoverdata/sender/:senderAddress",
  DrugHandoverController.getAllSenderDrugHandoverData
);
router.get(
  "/Handoverdata/receiver/:receiverAddress",
  DrugHandoverController.getAllReceiverDrugHandoverData
);
router.get("/Handoverdata/:id", DrugHandoverController.getDrugHandover);
router.post(
  "/Handoverdata/receiver/attachSignature",
  DrugHandoverController.attachSignatureReceiver
);

module.exports = router;
