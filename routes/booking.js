const express = require("express");
const router = express.Router({ mergeParams: true });

const bookingController = require("../controllers/booking");
const { isLoggedin, validateBooking } = require("../middleware");

// Show booking form → GET /listing/:id/book
router.get("/book", isLoggedin, bookingController.renderBookingForm);

// Handle booking form submission → POST /listing/:id/book
router.post("/book", isLoggedin, validateBooking, bookingController.createBooking);

// Show user's bookings → GET /booking/my-bookings
router.get("/my-bookings", isLoggedin, bookingController.showUserBookings);

// Cancel a booking → DELETE /listing/:id/cancel/:bookingId
router.delete("/cancel/:bookingId", isLoggedin, bookingController.cancelBooking);

module.exports = router;
