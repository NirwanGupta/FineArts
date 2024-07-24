const express = require("express");
const { createFrom ,createNewsletter } = require("../../controllers/From/joinform");

const router = express.Router();

router.post("/form",  createFrom);
router.post("/newsletter",  createNewsletter);

module.exports = router;
