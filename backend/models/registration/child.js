const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const schema = new mongoose.Schema({
    id: {
        type: String
    },
    fname: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate(m) {
            if (validator.isMobilePhone(m)) {
                return true;
            }
            else {
                return false;
            }
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(e) {
            if (validator.isEmail(e)) {
                return true;
            }
            else {
                return false;
            }
        },
    },
    dob: {
        type: Date,
        required: true,
        validate(d) {
            if (validator.isDate(d)) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    payid: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    parent:{
        type:{
            parent_id : {
                type:String
            },
            date:{
                type:Date,
                default : Date.now
            }
        }
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    mpin:{
        type:Boolean,
        default:false
    }
})

schema.pre("save",(async function(next){

    const password = this.password;

    const hashed_pass = await bcrypt.hash(password,8);

    this.password = hashed_pass;
    next();
}))

const child = mongoose.model("child",schema);

module.exports = child;
