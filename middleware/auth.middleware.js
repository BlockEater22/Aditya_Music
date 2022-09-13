const jwt = require("jsonwebtoken")
const dotenv = require('dotenv').config()
const UserMod =require("../models/userModel")

const protect = async(req,res,next) =>{
    
   
    if(!req.headers["authorization"]){
        return res.status(400).send({
            success:false,
            message:"Please Enter Authorization Token"
        })
    }else{
    let token = req.headers["authorization"];
    token = token.split(" ")[1]; //Access token

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (user) {
            req.user = user;
            // console.log(";;;;;",req.user)
            next();
        } else if (err.message === "jwt expired") {
            return res.json({
                success: false,
                message: "Access token expired"
            });
        } else {
            console.log(err);
            return res
                .status(403)
                .json({ err, message: "User not authenticated" });
        }
    });
}
}





module.exports ={
    protect
}