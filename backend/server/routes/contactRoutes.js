const express = require("express");
const { sendContactMessage } = require("../controllers/contactController");
const { asyncHandler } = require("../middleware/asyncHandler");

const router = express.Router();

router.post("/", asyncHandler(sendContactMessage));

module.exports = router;
