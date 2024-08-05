import mongoose from "mongoose";
import {data} from "./data.js";
import Listing from "../models/listing.js";

const mongo_url = "mongodb://127.0.0.1:27017/wonderlust";

main()
.then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(mongo_url);
};

const initDB = async ()=>{
    await Listing.deleteMany({});
    const initData = data.map((obj) => ({...obj, owner:"66ab990541d182b04e8b2bcc" }))
    await Listing.insertMany(initData);
    console.log("Data init");
};

initDB();