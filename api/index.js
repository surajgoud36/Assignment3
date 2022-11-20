const express = require("express");
require('dotenv').config();
const app=express();
var addAPIRouter = require("./routes/Addition");
const cors= require("cors");
const UserModel = require('./models/Users');
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://surajgoud367:wealth@mycluster.rotekpc.mongodb.net/surajdb?retryWrites=true&w=majority");
app.use(express.json());
app.use(cors());
app.use("/add",addAPIRouter);
app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
app.post("/createUser",async(req,res)=>{
    const user=req.body;
    const newUser=new UserModel(user);
    const userr=await newUser.save();

    res.json(userr._id);
    console.log(userr._id);
});
app.put("/updateUser/:id",async(req,res)=>{
    try{
        const updateUser= await UserModel.findByIdAndUpdate(req.params.id,{$set: req.body,},{new:true});
        res.status(200).json(updateUser);
    } catch(err){res.status(500).json(err);}
});
app.get("/testUser/:id",async(req,res)=>{
    const up=await UserModel.findById(req.params.id);
    res.json(up);
});
app.post("/loginUser",async(req,res)=>{
    const user=await UserModel.findOne({username:req.body.username});
    if(!user)
        res.json("InvalidEmail");
    if(user && user.password!==req.body.password)
        res.json("InvalidPassword");
    if(user && user.password===req.body.password)
        res.json(user.id);
});
app.listen(9000,()=>{
    console.log("server runss");
});