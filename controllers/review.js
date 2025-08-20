const Review = require("../models/reviews");
const Listing = require("../models/listing.js");


//add review
let add = async (req, res) => {
    let list = await Listing.findById(req.params.id);

    let newReview = new Review(req.body);
    newReview.author = req.user._id;
    list.reviews.push(newReview);

    await newReview.save();
    await list.save();
    req.flash("success", "New Review created");
    res.redirect(`/listing/${list._id}`);
  };

//delete review
let deleteReview = async (req, res) => {
    const { id, rid } = req.params;

    // First remove the review reference from the listing
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: rid } });

    // Then delete the review from the reviews collection
    await Review.findByIdAndDelete(rid);
    req.flash("success", "Review deleted");
    // Redirect back to the listing page using id
    res.redirect(`/listing/${id}`);
  };

module.exports = {add,deleteReview};
