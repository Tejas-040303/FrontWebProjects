import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import {Chat} from "./models/chat.js";
import methodOverride from "method-override";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let port = 3000;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.listen(port,()=>{
    console.log("hello");
});

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

app.get("/",(req,res)=>{
    res.send("hello");
});

// index route
app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});

// new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

// create route
app.post("/chats",(req,res)=>{
    let {from,msg,to} = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to:to,
        created_at: new Date()
    });
    newChat.save()
    .then(res=>{
        console.log("chat saves");
        
    }).catch(err=>{
        res.send("error");
        console.log(err);
    });
    res.redirect("/chats");
});

// edit route
app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

// update route
app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidator:true,new:true});
    console.log(updatedChat);
    res.redirect("/chats")
});

// Destory route
app.delete("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});