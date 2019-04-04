const mongoose = require("mongoose");

const DeveloperSchema = new mongoose.Schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true
  },
  Name: { type: String, default: "" },
  Email: { type: String, default: "" },
  Tasks: { type: Array, default: [] },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("DeveloperSchema", DeveloperSchema);
