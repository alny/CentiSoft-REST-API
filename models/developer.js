const mongoose = require("mongoose");

const DeveloperSchema = new mongoose.Schema({
  Name: { type: String, default: "" },
  Email: { type: String, default: "" },
  Tasks: { type: Array, default: [] },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("DeveloperSchema", DeveloperSchema);
