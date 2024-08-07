const express = require("express");
const {
  getSingleCard,
  postSingleCard,
  deleteSingleCard,
  getAllCards,
  updateSingleCard,
} = require("../controllers/cardController");
const isLogged = require("../middleware/isLogged");
const router = express.Router();

router.get("/", getAllCards);
router.post("/", postSingleCard);
router.get("/:id", getSingleCard);
router.delete("/:id", deleteSingleCard);
router.patch("/:id", updateSingleCard);

module.exports = router;
