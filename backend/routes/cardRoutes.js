const express = require("express");
const { getSingleCard } = require("../controllers/cardController");
const router = express.Router();

router.get("/", getSingleCard);

module.exports = router;
