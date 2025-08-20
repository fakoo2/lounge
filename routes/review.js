const express = require("express");
const router = express.Router({ mergeParams: true });

const reviewSchema = require("../schemas/reviewSchema.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedin, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

//add review
router.post("/", isLoggedin, validateReview, wrapAsync(reviewController.add));

//delete review
router.delete(
  "/:rid",
  isLoggedin,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
