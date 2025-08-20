const mongoose = require("mongoose");
const listingSchema = require("../schemas/lisitingSchema");
const Review = require("./reviews");

const lst = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1575310452551-5af1ad4a6dd5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1575310452551-5af1ad4a6dd5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          : v,
    },
    filename: {
      type: String,
      default: "",
    },
  },

  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// Delete associated reviews when a listing is deleted
lst.post("findOneAndDelete", async (listing) => {
  if (listing) await Review.deleteMany({ _id: { $in: listing.reviews } });
});

const Listing = mongoose.model("Listing", lst);

module.exports = Listing;
