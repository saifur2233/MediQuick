const router = require("express").Router();
const ManufacturerController = require("../controllers/ManufacturerController");

router.post("/menufacturer/addDrug", ManufacturerController.addDrug);
router.get("/menufacturer/drugs", ManufacturerController.getAllDrugs);

module.exports = router;
