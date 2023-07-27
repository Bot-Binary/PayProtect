const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");




const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))


app.post("/home",(req,res)=>{
    console.log("HHHHHHHHHHHH");
})








app.listen(8000,()=>{
    console.log("Listening on 8000");
})