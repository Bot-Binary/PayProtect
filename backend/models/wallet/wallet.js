const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


const schema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        default:0,
    },
    mpin:{
        type:String,
        required:true
    }

})


schema.pre("save",(async function(next){
    const password = this.password;

    const hashed_pass = await bcrypt.hash(password,8);

    this.password = hashed_pass;
    next();
}))

const wallet = mongoose.model("wallet",schema);


module.exports = wallet;