const userController = require("../controllers/user.controller")
const express =require("express")

const router = express.Router()


router.post("/register",userController.register)
router.post("/refresh",userController.refresh)
router.post("/login",userController.login)






module.exports =router;