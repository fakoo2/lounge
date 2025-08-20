const User = require("../models/user.js");


let rendersignupForm = (req, res) => res.render("users/signup.ejs");
let reanderLoginForm = (req, res) => res.render("users/login.ejs");

//register - sign up
let register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newuser = new User({ email, username });
    const registerUser = await User.register(newuser, password);
    req.login(registerUser, (err) => {
      if (err) return next(err);
      req.flash("success", `Welcome, ${username}`);
      res.redirect("/");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/user/signup");
  }
};

//login
let login = async (req, res) => {
  req.flash("success", `Welcome, back ${req.body.username}!`);
  res.redirect(res.locals.redirectUrl ? res.locals.redirectUrl : "/");
};

let logout = (req, res) => {
  req.logOut((err) => {
    if (err) return next(err);
    req.flash("success", "Logges out!");
    res.redirect("/");
  });
};
module.exports = { rendersignupForm, reanderLoginForm, register, login ,logout};
