const Listing = require("./models/listing");
const Review = require("./models/reviews");

const isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to add lounge!");
    return res.redirect("/user/login");
  }
  next();
};

const saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

const isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  // console.log("-------------------listing----------------------");
  // console.log(listing.owner._id);
  // console.log("-------------------curr----------------------");
  // console.log(currentUser);

  if (!listing.owner._id.equals(req.user._id)) {
    req.flash("error", "You don't  have permission to Updated");
    return res.redirect(`/listing/${id}`);
  }
  next();
};

const isReviewAuthor = async (req, res, next) => {
  let { id, rid } = req.params;
  let review = await Review.findById(rid);
  if (!review.author._id.equals(req.user._id)) {
    req.flash("error", "You don't  have permission to Delete");
    return res.redirect(`/listing/${id}`);
  }
  next();
};

const bookingSchema = require("./schemas/bookingSchema");

const validateBooking = (req, res, next) => {
  const { error } = bookingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(", ");
    req.flash("error", msg);
    return res.redirect("back");
  }
  next();
};

module.exports = {
  isLoggedin,
  saveRedirectUrl,
  isOwner,
  isReviewAuthor,
  validateBooking,
};
