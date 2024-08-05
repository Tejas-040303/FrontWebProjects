import mongoose, { Schema } from "mongoose";

main()
.then((res)=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    address: String,
})

const User = mongoose.model("User",userSchema);

// Insert One Method
// User.insertOne([
    //     {name:"Tony", email:"tony@gmail.com",age:45,address:"NY"},
    // ]).then((res)=>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })

// Insert Many Method
// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com",age:45,address:"NY"},
//     {name:"Smit", email:"smit@gmail.com",age:20,address:"Sewden"}
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// find method
// User.find({age:{$gt:20}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// findOne method
// User.findOne({age:{$gt:20}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// find by id 
// User.findById("6684115adfd0916a5c0b096c").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// const user2 = new User({
//     name: "Adam",
//     email: "adma@gmail.com",
//     age: 21,
//     address: "city"
// });

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// Update Method
// User.updateOne({name:"Adam"},{age:34})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.updateMany({age:{$gt:25}},{age:34})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Find and update method as whole
// User.findOneAndUpdate({name:"Adam"},{name:"Anuj"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// above returns' old data as below in terminal
// {
//     _id: new ObjectId('668411dd9cd84030e4889a98'),
//     name: 'Adam',
//     email: 'adma@gmail.com',
//     age: 34,
//     address: 'city',
//     __v: 0
//   }
// above is o/p of above from 93 line to 98 line, but if set the {new:true} like
// User.findOneAndUpdate({name:"Anuj"},{age:17},{new:true})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// we get
// {
//     _id: new ObjectId('668411dd9cd84030e4889a98'),
//     name: 'Anuj',
//     email: 'adma@gmail.com',
//     age: 17,
//     address: 'city',
//     __v: 0
//   }

// delete method
// User.deleteOne({name:"Smit"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.deleteMany({age:21})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// findByIdAndDelete method
// User.findByIdAndDelete("668412ea3f7a05c67eff830d").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// findOneAndDelete method
// User.findOneAndDelete({address:"city"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Schema Validation
// go to mongodb doc for more about schema
// const bookSchema = new Schema({
//     title:{
//         type: String,
//         require: true
//     },
//     author:{
//         type:String
//     },
//     price:{
//         type:Number,
//     }
// })