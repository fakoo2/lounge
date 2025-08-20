const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lounge: {
    type: Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
