const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


// models
const parent = require("../models/registration/parents");
const child = require("../models/registration/child");
const merchant = require("../models/registration/merchant");



const login = (async (req,res)=>{
    const data = req.body;
    console.log(data);
    const type = data.type;
    const phone = data.phone;
    const password = data.password;
    if(type == "P"){
        const obj = await parent.findOne({phone:phone});
        if(obj == null){
            res.status(404).send();
        }
        const real_password = obj.password;
        const password_match = await bcrypt.compare(password,real_password);
        
        // ///////////////////////////////////////////////////////////////////////////////
        //  ERROR CHECK it thouraly

        const pipe=[{
            $project :{
                _id:0,
                password:0
            }
        }]

        const aggrigated_obj = await parent.aggregate(pipe);
        / ///////////////////////////////////////////////////////////////////////////////
        //  ERROR CHECK it thouraly

        if(password_match == true){
            res.status(200).send(aggrigated_obj);
        }
        else{
            res.status(211).send();
        }
    }
    else if(type == "C"){
        const obj = await child.findOne({phone:phone});
        if(obj == null){
            res.status(404).send();
        }
        const real_password = obj.password;
        const password_match = await bcrypt.compare(password,real_password);

        / ///////////////////////////////////////////////////////////////////////////////
        //  ERROR CHECK it thouraly

        const pipe=[{
            $project :{
                _id:0,
                password:0
            }
        }]

        const aggrigated_obj = await parent.aggregate(pipe);

        / ///////////////////////////////////////////////////////////////////////////////
        //  ERROR CHECK it thouraly


        if(password_match == true){
            res.status(200).send(aggrigated_obj);
        }
        else{
            res.status(211).send();
        }
    }
    else{
        const obj = await merchant.findOne({phone:phone});
        if(obj == null){
            res.status(404).send();
        }
        const real_password = obj.password;
        const password_match = await bcrypt.compare(password,real_password);


        // / ///////////////////////////////////////////////////////////////////////////////
        //  ERROR CHECK it thouraly

        const pipe=[{
            $project :{
                _id:0,
                password:0
            }
        }]

        const aggrigated_obj = await merchant.aggregate(pipe);

        / ///////////////////////////////////////////////////////////////////////////////
        //  ERROR CHECK it thouraly


        if(password_match == true){
            res.status(200).send(aggrigated_obj);
        }
        else{
            res.status(211).send();
        }
    }
})

module.exports = login;