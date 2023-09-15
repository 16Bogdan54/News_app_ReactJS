const mongoose = require("mongoose");

const SavedNewsSchema = new mongoose.Schema({
  title: { type: String, require: true },
});
