const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = Schema({
  isOpen: { type: Boolean, required: true },
  tagTitle: { type: String, required: true },
  tagColor: { type: String, required: true },
});

const cardSchema = Schema({
  description: { type: String, required: true },
  filesize: { type: String, required: true },
  close: { type: Boolean, required: true },
  tag: { type: tagSchema, required: true },
});

module.exports = mongoose.model("card", cardSchema);
