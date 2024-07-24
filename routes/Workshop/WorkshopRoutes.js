const express = require("express");
const { verifyUser, verifyAdmin } = require("../../authenticate");
const router = express.Router();
const {createWorkShop, getAllWorkshops, getSingleWorkshop, updateWorkshop, deleteWorkshop} = require('../../controllers/Workshops/WorkshopController');

router.get('/', getAllWorkshops);
router.post('/create', verifyUser, verifyAdmin, createWorkShop);
router.patch('/update/:id', verifyUser, verifyAdmin, updateWorkshop);
router.delete('/delete/:id', verifyUser, verifyAdmin, deleteWorkshop);
router.get('/:id', getSingleWorkshop);

module.exports = router;