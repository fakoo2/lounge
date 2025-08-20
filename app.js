const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const ExpressError = require("./utils/ExpressError.js");
require("dotenv").config();

const port = 8081;
const MONGO_URL = "mongodb://localhost:27017/lounge";
// const DB_URL = process.env.ATLASDB_URL;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//session
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    // store: MongoStore.create({
    //   mongoUrl: DB_URL,
    //   crypto: {
    //     secret: process.env.SECRET,
    //   },
    // }),
    saveUninitialized: true,
    // cookie: {
    //   expires: Date.now() + 60 * 1000,
    //   maxAge: 60 * 1000,
    //   httpOnly: true,
    // },
  })
);

app.use(flash());

//passport
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//custom middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  // console.log(req.user);

  next();
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Connection to db...");
  })
  .catch((err) => {
    console.log(err);
  });

// base
app.get("/", (req, res) => {
  res.render("layouts/home");
});


// Import routes
const listingroute = require("./routes/listing.js");
const reviewroute = require("./routes/review.js");
const userroute = require("./routes/user.js");
const favoritesRoutes = require("./routes/favorites.js");
const bookingRoutes = require("./routes/booking");

// Mount routes
app.use("/favorites", favoritesRoutes);
app.use("/booking", bookingRoutes);           // for /booking/my-bookings and others
app.use("/listing/:id", bookingRoutes);       // for booking routes related to a specific listing (like /listing/:id/book)
app.use("/listing", listingroute);
app.use("/listing/:id/review", reviewroute);
app.use("/user", userroute);

// //page not found
app.all("/{*any}", (req, res, next) => {
  next(new ExpressError(404, "Pagenot found"));
});

//error hanler middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  // res.status(status).send(message);
  res.status(status).render("error.ejs", { status, message });
});

//error handler check
// app.use("/err", (req, res) => {
//   res.render("error.ejs", { status: "404", message: "error handling" });
// });

app.listen(port, () => console.log(`app listening on port ${port}!`));
