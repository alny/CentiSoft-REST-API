const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  Name: { type: String, default: "" },
  DueDate: { type: Date, default: Date.now },
  CustomerId: { type: mongoose.Schema.Types.ObjectId, ref: "CustomerSchema" },
  Tasks: { type: Array, default: [] }
});

module.exports = mongoose.model("ProjectSchema", ProjectSchema);
