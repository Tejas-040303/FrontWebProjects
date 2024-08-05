import Listing from "./models/listing.js";

export const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.session.redirectUrl = req.originalUrl;
      req.flash("error", "You must be signed in first!");
      return res.redirect("/login");
    }
    next();
  };  
 
export const saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
      res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

export const isOwner = async (req,res,next)=>{
  let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
      req.flash("error","You don't have permission");
      return res.redirect(`/listings/${id}`);
    }
    next();
};