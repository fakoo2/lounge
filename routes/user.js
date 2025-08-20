const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const userSchema = require("../schemas/userSchema.js");

const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

const validateUSer = (req, res, next) => {
  let { error } = userSchema.validate(req.body);

  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

//register - sign up
router
  .route("/signup")
  .get(userController.rendersignupForm)
  .post(validateUSer, wrapAsync(userController.register));

//login
router
  .route("/login")
  .get(userController.reanderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/user/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

router.get("/logout", userController.logout);

module.exports = router;
