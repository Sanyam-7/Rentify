const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Mongo_URL = "mongodb://127.0.0.1/rentify";
const Listing = require("./models/listing");
const Review = require("./models/review");
const User = require("./models/user"); // Ensure this is correctly imported
const path = require("path");
const localStrategy = require("passport-local");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const passport = require('passport');

// Use the correct variable for passport local strategy
passport.use(new localStrategy(User.authenticate()));

main()
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((error) => {
    console.log(error);
  });

async function main() {
  await mongoose.connect(Mongo_URL);
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'yourSecretKey', // Replace with your own secret
  resave: false,
  saveUninitialized: false
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Define serializeUser and deserializeUser functions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", function (req, res, next) {
  res.render("listings/login", { nav: false });
});

app.get("/register", function (req, res, next) {
  res.render("listings/signUp", { nav: false });
});

app.post("/register", function (req, res, next) {
  const data = new User({
    username: req.body.username,
    email: req.body.email,
    contact: req.body.contact,
  });

  User.register(data, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/login");
    });
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/register",
    successRedirect: "/listings",
  }),
  function (req, res, next) {}
);

app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

app.post("/listings", async (req, res) => {
  try {
    const { title, description, image, price, location, country } = req.body;
    const newListing = new Listing({
      title,
      description,
      image,
      price,
      location,
      country,
    });
    await newListing.save();
    res.redirect(`/listings/${newListing._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating listing");
  }
});

app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("listings/edit", { listing });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image, price, location, country } = req.body;
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      id,
      {
        title,
        description,
        image,
        price,
        location,
        country,
      },
      { new: true }
    ); // { new: true } ensures we get the updated document back

    if (!updatedListing) {
      return res.status(404).send("Listing not found");
    }

    res.redirect(`/listings/${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

app.post("/listings/:id/reviews", async (req, res) => {
  const { id } = req.params;
  const { comment, rating } = req.body;

  try {
    // Find the listing by ID to associate the review with
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }

    // Create a new review
    const newReview = new Review({
      comment,
      rating,
      listing: listing._id, // Associate the review with the listing
    });

    // Save the review to the database
    await newReview.save();

    // Update the listing's reviews array with the new review ObjectId
    listing.reviews.push(newReview._id);
    await listing.save();

    // Redirect back to the listing details page after adding the review
    res.redirect(`/listings/${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.render("listings/show", { listing });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
