const express = require(`express`);
const router = express.Router();
const {getAllEvents, getSingleEvents, createEvents, updateEvents, deleteEvents} = require(`../../controllers/Events/eventsController`);
const { verifyUser, verifyAdmin } = require("../../authenticate");

router.get(`/`, getAllEvents).post(`/create`, verifyUser, verifyAdmin, createEvents);
router.patch(`/update/:id`, verifyUser, verifyAdmin, updateEvents);
router.delete(`/delete/:id`, verifyUser, verifyAdmin, deleteEvents);
router.get(`/:id`, getSingleEvents);

module.exports = router;

