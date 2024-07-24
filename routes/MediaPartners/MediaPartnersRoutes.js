const {getAllMediaPartners, getSingleMediaPartners, createMediaPartners, updateMediaPartners, deleteMediaPartners} = require(`../../controllers/MediaPartners/MediaPartnersController`);
const express = require(`express`);
const { verifyUser, verifyAdmin } = require("../../authenticate");
const router = express.Router();

router.get(`/`, getAllMediaPartners).post(`/create`, verifyUser, verifyAdmin, createMediaPartners);
router.patch(`/update/:id`, verifyUser, verifyAdmin, updateMediaPartners);
router.delete(`/delete/:id`, verifyUser, verifyAdmin, deleteMediaPartners);
router.get(`/:id`, getSingleMediaPartners);

module.exports = router;