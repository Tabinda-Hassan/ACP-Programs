// models/ClaimItem.js
const mongoose = require("mongoose");

const claimItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sapId: { type: String, required: true },
  email: { type: String, required: true },
  itemName: { type: String, required: true },
  reason: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("ClaimItem", claimItemSchema);
