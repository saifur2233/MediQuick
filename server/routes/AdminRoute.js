const router = require("express").Router();
const AdminController = require("../controllers/AdminController");

router.get("/admin/alladmin", AdminController.getAllAdmin);
router.get("/admin/allmenufacturer", AdminController.getAllMenufacturer);
router.get("/admin/alldistributor", AdminController.getAllDistributor);
router.get("/admin/allretailer", AdminController.getAllRetailer);
router.get("/admin/alltransportagency", AdminController.getAllTransportAgency);
router.delete("/admin/user/:userid", AdminController.deleteUser);

module.exports = router;
