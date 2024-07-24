const {getAllSponsors, getSingleSponsor, createSponsor, updateSponsor, deleteSponsor} = require(`../../controllers/Sponsors/SponsorsController`);
const express = require(`express`);
const { verifyUser, verifyAdmin } = require("../../authenticate");
const router = express.Router();

router.get(`/`, getAllSponsors).post(`/create`, verifyUser, verifyAdmin, createSponsor);
router.patch(`/update/:id`, verifyUser, verifyAdmin, updateSponsor);
router.delete(`/delete/:id`, verifyUser, verifyAdmin, deleteSponsor);
router.get(`/:id`, getSingleSponsor);

module.exports = router;