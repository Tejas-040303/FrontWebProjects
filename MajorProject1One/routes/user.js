import express from "express";
import User from "../models/user.js";
import wrapAsync from "../utils/wrapAsync.js";
import passport from "passport";
const router = express.Router();
import {saveRedirectUrl} from "../middleware.js";

// sign up route
router.get("/signup", (req, res) => {
    res.render("user/signup");
});

// after sign up route
router.post("/signup", wrapAsync(async (req, res) => {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    try {
        const registerUser = await User.register(newUser, password);
        console.log(registerUser);
        req.login(registerUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to WonderLust");
            res.redirect("/listings");
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

// login route
router.get("/login", (req,res)=>{
    res.render("user/login");
});

// after login route
router.post("/login", saveRedirectUrl, passport.authenticate("local", {failureRedirect:'/login',failureFlash:true}) ,wrapAsync(async(req,res)=>{
    req.flash("success","Welcome back to WonerLust");
    res.redirect(res.locals.redirectUrl || "/listings");
}));

// logout route
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","you are logged outs!");
        res.redirect("/listings")
    })
})

export default router;
