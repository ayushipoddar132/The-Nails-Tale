const mongoose = require("mongoose");

const customRequestSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    occasion: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      required: true,
    },

    shape: {
      type: String,
      default: "Not decided",
    },

    length: {
      type: String,
      default: "Not decided",
    },

    colours: {
      type: String,
      trim: true,
      default: "",
    },

    details: {
      type: String,
      required: true,
      trim: true,
    },

    inspirationFileName: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Confirmed", "Rejected"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CustomRequest", customRequestSchema);