const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.renderBookingForm = async (req, res) => {
  const { id } = req.params; // lounge id
  const lounge = await Listing.findById(id);
  if (!lounge) {
    req.flash("error", "Lounge not found");
    return res.redirect("/listing");
  }
  res.render("booking/form", { lounge });
};

module.exports.createBooking = async (req, res) => {
  const { id } = req.params; // lounge id
  const { date, guests } = req.body;
  
  const booking = new Booking({
    user: req.user._id,
    lounge: id,
    date,
    guests,
  });

  await booking.save();
  req.flash("success", "Booking successful!");
  res.redirect(`/listing/${id}`);
};

// Show all bookings by logged-in user
module.exports.showUserBookings = async (req, res) => {
  const userId = req.user._id;
  const bookings = await Booking.find({ user: userId }).populate("lounge");
  res.render("booking/index", { bookings });
};

// Cancel booking by bookingId, only if owned by user
module.exports.cancelBooking = async (req, res) => {
  const { bookingId } = req.params;
  const userId = req.user._id;

  const booking = await Booking.findOne({ _id: bookingId, user: userId });
  if (!booking) {
    req.flash("error", "Booking not found or permission denied.");
    return res.redirect("/booking/my-bookings");
  }

  await Booking.findByIdAndDelete(bookingId);
  req.flash("success", "Booking cancelled successfully.");
  res.redirect("/booking/my-bookings");
};

