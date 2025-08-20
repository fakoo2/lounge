const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { isLoggedin, isOwner } = require("../middleware.js");

const listingSchema = require("../schemas/lisitingSchema.js");
const ListingController = require("../controllers/listing.js");

//upload image
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

router
  .route("/")
  .get(wrapAsync(ListingController.show)) //show
  .post(
    isLoggedin,
    validateListing,
    upload.single("image"),
    wrapAsync(ListingController.add)
  ); //add in databse

// add new button
router.get("/new", isLoggedin, ListingController.addNewBtn);

//show individual hotel
router.get("/:id", wrapAsync(ListingController.hotel));

//edit button
router.get(
  "/:id/edit",
  isLoggedin,
  isOwner,
  wrapAsync(ListingController.editBtn)
);

//edit in databse
router.patch(
  "/:id/update",
  isLoggedin,
  isOwner,
  upload.single("image"),
  validateListing,
  wrapAsync(ListingController.update)
);

//delete in db
router.delete(
  "/:id/delete",
  isLoggedin,
  isOwner,
  wrapAsync(ListingController.deleteList)
);

module.exports = router;
