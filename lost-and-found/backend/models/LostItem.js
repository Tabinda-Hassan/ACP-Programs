const mongoose = require("mongoose");

const lostItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sapId: { type: String, required: true },
  email: { type: String, required: true },
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  dateLost: { type: Date, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("LostItem", lostItemSchema);
