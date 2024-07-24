const express = require("express");
const { verifyUser, verifyAdmin } = require("../../authenticate");
const { createartwork, updateartwork, getartworkbyId, deleteartwork, getartwork } = require("../../controllers/ArtGallery/artwork");

const router = express.Router();

router.post("/artwork", verifyUser, createartwork);
router.get("/artwork", getartwork);
router.put("/artwork/:artworkId", verifyUser, verifyAdmin, updateartwork);
router.get("/artwork/:artworkId", verifyUser, verifyAdmin, getartworkbyId);
router.delete("/artwork/:artworkId", verifyUser, verifyAdmin, deleteartwork);

module.exports = router;
