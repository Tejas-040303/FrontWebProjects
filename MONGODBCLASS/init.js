import mongoose from "mongoose";
import {Chat} from "./models/chat.js";

main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chat");
};

let allChat = [
    {
        from:"Adam",
        to:"Tejas",
        msg: "Hello",
        created_at: new Date(),
    },
    {
        from:"Anuj",
        to:"Knhna",
        msg: "I love to play",
        created_at: new Date(),
    },
    {
        from:"Kanha",
        to:"Tejas",
        msg: "Hare Krishna",
        created_at: new Date(),
    },
    {
        from:"Tejas",
        to:"Suraj",
        msg: "Hare Bol",
        created_at: new Date(),
    }
]

Chat.insertMany(allChat);
