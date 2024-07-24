const express = require("express");
const { verifyUser, verifyAdmin } = require("../../authenticate");
const {
  createWorkshop,
  getWorkshop,
  updateWorkshop,
  deleteWorkshop,
  getWorkshopbyId,
} = require("../../controllers/HomePage/workshop");
const router = express.Router();

router.post("/workshop",verifyUser ,createWorkshop);
router.get("/workshop", getWorkshop);
router.put("/workshop/:workshopId", verifyUser,verifyAdmin,updateWorkshop);
router.get("/workshop/:workshopId",verifyUser,verifyAdmin ,getWorkshopbyId);
router.delete("/workshop/:workshopId",verifyUser,verifyAdmin ,deleteWorkshop);

module.exports = router;
