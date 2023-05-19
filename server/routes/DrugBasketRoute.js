const router = require("express").Router();
const DrugBasketController = require("../controllers/DrugBasketController");

router.post("/drug-basket/addDrug", DrugBasketController.addDrug);
router.get(
  "/drug-basket/drugs",
  DrugBasketController.getAllDrugsByManufacturer
);
router.get("/drug-basket/:drugId", DrugBasketController.searchDrugByDrugCode);
router.get("/drug-basket/drug/:id", DrugBasketController.searchDrugById);
router.delete("/drug-basket/drug/:id", DrugBasketController.deleteDrugByID);
router.patch("/drug-basket/drug/:id", DrugBasketController.updateDrugByID);
module.exports = router;
