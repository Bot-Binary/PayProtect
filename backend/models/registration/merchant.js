const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const schema = mongoose.Schema({
    id:{
        type:String,
        unique:true
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
    username: {
        type: String,
        unique:true,
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
    category: {
        type: [
            {
                type : String
            }
        ]
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

const merchant = mongoose.model("merchant",schema);

module.exports = merchant;
