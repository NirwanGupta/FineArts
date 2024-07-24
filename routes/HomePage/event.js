const express = require("express");
const { verifyUser, verifyAdmin } = require("../../authenticate");
const {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  getEventbyId,
} = require("../../controllers/HomePage/event");
const router = express.Router();

router.post("/event",verifyUser,verifyAdmin, createEvent);
router.get("/event", getEvent);
router.put("/event/:eventId",verifyUser,verifyAdmin ,updateEvent);
router.get("/event/:eventId", verifyUser,verifyAdmin,getEventbyId);
router.delete("/event/:eventId", verifyUser,verifyAdmin,deleteEvent);

module.exports = router;
