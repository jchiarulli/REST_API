const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
    index: "2dsphere",
  },
  coordinates: {
    type: [Number],
  },
});

// create ninja Schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },

  geometry: GeoSchema,
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;
