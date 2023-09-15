const mongoose = require("mongoose");

const CreatedNewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  richText: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const CreatedNews = mongoose.model("News", CreatedNewsSchema);

module.exports = CreatedNews;
