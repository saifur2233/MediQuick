const router = require("express").Router();
const DrugBasketController = require("../controllers/DrugBasketController");

router.post("/drug-basket/addDrug", DrugBasketController.addDrug);
router.post(
  "/drug-basket/wallet/addDrug",
  DrugBasketController.addDrugToWallet
);
router.get(
  "/drug-basket/manufacturer/drugs/:address",
  DrugBasketController.getAllDrugsByManufacturer
);
router.get(
  "/drug-basket/distributor/drugs/:address",
  DrugBasketController.getAllDrugsByDistributor
);
router.get(
  "/drug-basket/retailer/drugs/:address",
  DrugBasketController.getAllDrugsByRetailer
);
router.get(
  "/drug-basket/transportagency/drugs/:address",
  DrugBasketController.getAllDrugsByTransportAgency
);
router.get(
  "/drug-basket/search/:drugId",
  DrugBasketController.searchDrugByDrugCode
);
router.get("/drug-basket/drug/:id", DrugBasketController.searchDrugById);
router.delete("/drug-basket/drug/:id", DrugBasketController.deleteDrugByID);
router.patch("/drug-basket/drug/:id", DrugBasketController.updateDrugByID);
module.exports = router;
