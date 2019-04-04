const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true
  },
  Name: { type: String, default: "" },
  Address: { type: String, default: "" },
  Address2: { type: String, default: "" },
  Zip: { type: String, default: "" },
  City: { type: String, default: "" },
  Country: { type: String, default: "" },
  Email: { type: String, default: "" },
  Phone: { type: String, default: "" },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CustomerSchema", CustomerSchema);
