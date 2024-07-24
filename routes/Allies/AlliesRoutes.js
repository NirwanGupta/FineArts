const express = require("express");
const { verifyUser, verifyAdmin } = require("../../authenticate");
const router = express.Router();
const {getAllAllies, createAllie, uploadImage, deleteAllie} = require('../../controllers/Allies/AlliesContainer');

router.get('/allAllies', getAllAllies);
router.post('/uploadAllieImage', verifyUser, verifyAdmin, uploadImage);
router.post('/createAllie', verifyUser, verifyAdmin, createAllie);
router.delete('/deleteAllie', verifyUser, verifyAdmin, deleteAllie);

module.exports = router;