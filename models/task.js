const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  Name: { type: String, default: "" },
  Description: { type: String, default: "" },
  Created: { type: Date, default: Date.now },
  Duration: { type: Number, default: 0 },
  ProjectId: { type: mongoose.Schema.Types.ObjectId, ref: "ProjectSchema" },
  DeveloperId: { type: mongoose.Schema.Types.ObjectId, ref: "DeveloperSchema" }
});

module.exports = mongoose.model("TaskSchema", TaskSchema);
