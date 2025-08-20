const Listing = require("../models/listing.js");

// Show all listings with search and price filter
let show = async (req, res) => {
  const { q, maxPrice } = req.query;

  // Build filter object
  const filter = {};
  if (q) {
    filter.$or = [
      { title: new RegExp(q, "i") },
      { location: new RegExp(q, "i") },
    ];
  }
  if (maxPrice) {
    filter.price = { $lte: Number(maxPrice) };
  }

  const list = await Listing.find(filter);
  const count = list.length;

  res.render("listings/index.ejs", {
    list,
    count,
    query: req.query,
    user: req.user, // important for favorites button
  });
};

// Show form to create new listing
let addNewBtn = (req, res) => {
  res.render("listings/new.ejs");
};

// Create new listing in DB
let add = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;

  let newList = new Listing(req.body);
  newList.image = { url, filename };
  newList.owner = req.user._id;
  await newList.save();

  req.flash("success", "New Lounge created");
  res.redirect("/listing");
};

// Show single listing with reviews
let hotel = async (req, res) => {
  let { id } = req.params;

  let hotel = await Listing.findById(id).populate({
    path: "reviews",
    populate: { path: "author" },
  });

  if (!hotel) {
    req.flash("error", "Lounge you requested does not exist");
    return res.redirect("/listing");
  }

  res.render("listings/show.ejs", { hotel, user: req.user });
};

// Show edit form
let editBtn = async (req, res) => {
  let { id } = req.params;

  let hotel = await Listing.findById(id);
  if (!hotel) {
    req.flash("error", "Lounge you requested does not exist");
    return res.redirect("/listing");
  }

  let originalUrl = hotel.image.url;
  originalUrl = originalUrl.replace("/upload", "/upload/h_300,w_250");

  res.render("listings/edit.ejs", { hotel, originalUrl });
};

// Update listing in DB
let update = async (req, res) => {
  let { id } = req.params;
  let newList = await Listing.findByIdAndUpdate(id, { ...req.body });

  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    newList.image = { url, filename };
    await newList.save();
  }

  req.flash("success", "Lounge updated");
  res.redirect(`/listing/${id}`);
};

// Delete listing
let deleteList = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);

  req.flash("success", "Lounge deleted");
  res.redirect("/listing");
};

module.exports = {
  show,
  addNewBtn,
  add,
  hotel,
  editBtn,
  update,
  deleteList,
};
