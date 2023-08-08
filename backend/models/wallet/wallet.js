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
        type:Number,
        required:true
    }

})


schema.pre("save",(async function(next){
    const mpin = this.mpin;

    const hashed_mpin = await bcrypt.hash(mpin,8);

    this.mpin = hashed_mpin;
    next();
}))

const wallet = mongoose.model("wallet",schema);


module.exports = wallet;