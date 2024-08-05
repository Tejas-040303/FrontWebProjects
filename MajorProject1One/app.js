import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import ejsMate from "ejs-mate";
import ExpressError from "./utils/ExpressError.js";
import session from "express-session";
import listingRoute from "./routes/listing.js";
import reviewRoute from "./routes/review.js";
import userRoute from "./routes/user.js";
import flash from "connect-flash";
import passport from "passport";
import User from "./models/user.js";
import { Strategy as LocalStrategy } from "passport-local";

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sessionOption = {
  secret : "majorprojectone1",
  resave : false,
  saveUninitialized : true,
  cookie: {
    expires: Date.now() + 7*24*60*60*1000,
    // day*hour*min*sec*milesec
    maxAge: 7*24*60*60*1000,
    httpOnly : true
  }
};

// main route
app.get("/", (req, res) => {
  console.log("root working");
  res.send("root working");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(session(sessionOption));
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Initialize user.js
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.listen(port, () => {
  console.log("server working");
});

const mongo_url = "mongodb://127.0.0.1:27017/wonderlust";

async function main() {
  await mongoose.connect(mongo_url);
}

main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });



app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", reviewRoute);
app.use("/",userRoute)

// middleware for page not found
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found", 404));
});

// middleware
app.use((err, req, res, next) => {
  let { statusCode = 505, message = "something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message);
});

// joi api for validing schema
