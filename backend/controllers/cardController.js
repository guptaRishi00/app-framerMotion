const CardModel = require("../models/cardModel");

//GET All Cards
const getAllCards = async (req, res) => {
  try {
    const card = await CardModel.find({});
    res.status(200).json({ card });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

//GET A Single Card
const getSingleCard = async (req, res) => {
  const id = req.params.id;
  try {
    const card = await CardModel.find({ _id: id });
    res.status(200).json(card);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

//POST A Single Card
const postSingleCard = async (req, res) => {
  const { description, filesize, close, tag } = req.body;

  try {
    const card = await CardModel.create({ description, filesize, close, tag });
    res.status(200).json({ result: card });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ messg: "Something went wrong", error: error.message });
  }
};

//Delete A Single Card
const deleteSingleCard = async (req, res) => {
  const id = req.params.id;
  try {
    const card = await CardModel.deleteOne({ _id: id });
    if (card.deletedCount === 0) {
      return res.status(404).json({ message: "Card not found" });
    }
    res
      .status(200)
      .json({ result: card, message: "Card deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

//UPADTE A Single Card
const updateSingleCard = async (req, res) => {
  const id = req.params.id;
  const { description, filesize, close, tag } = req.body;

  try {
    const card = await CardModel.findByIdAndUpdate(
      id,
      { description, filesize, close, tag },
      { new: true }
    );
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res
      .status(200)
      .json({ result: card, message: "Card updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getSingleCard,
  postSingleCard,
  deleteSingleCard,
  getAllCards,
  updateSingleCard,
};
