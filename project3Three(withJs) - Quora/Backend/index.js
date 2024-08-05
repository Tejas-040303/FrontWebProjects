import { render } from "ejs";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";

const port = 8080;
const app = express();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

let posts = [
  { 
    id : uuidv4(),
    username: "tejas",    
    content: "I love coding"
},
  { 
    id : uuidv4(),
    username: "neha", 
    content: "I love cooking" 
},
  { 
    id : uuidv4(),
    username: "shewta", 
    content: "I am very talkative"
}
];

app.get("/posts", (req, res) => {
  res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
  res.render("new.ejs");
});

app.post(("/posts"), (req,res)=>{
  let {username,content} = req.body;
  let id = uuidv4();
  posts.push({id,username,content});
  console.log(posts);
  res.redirect("/posts");
})

app.get("/posts/:id", (req,res)=>{
  let {id} = req.params;
  let post = posts.find((p)=> id ===p.id);
  res.render("show.ejs", {post})
});

app.patch("/posts/:id",(req,res)=>{
  let {id} = req.params;
  let newContent = req.body.content;
  
  let post = posts.find((p)=> id ===p.id);
    post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", {post});
})

app.delete("/posts/:id",(req,res)=>{
  let {id} = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
})

app.listen(port, () => {
  console.log("port working");
});
