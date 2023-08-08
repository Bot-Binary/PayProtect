const mongoose = require("mongoose");


// db model
const parent = require("./models/registration/parents");


const dlt = (async (req,res)=>{
    const phone = req.body.phone;
    const dlt = await parent.deleteOne({phone:phone}).
        then(()=>{
            console.log("UUU");
        });
    // console.log(dlt.deletedCount);
})


module.exports = dlt;