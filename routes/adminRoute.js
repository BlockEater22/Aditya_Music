const adminController = require("../controllers/adminController")
const express =require("express")
const {protect} =require("../middleware/auth.middleware")


const router = express.Router()



router.post(
    "/updatestatus/:id",
    protect,
    adminController.statusUpdate
  );

  

  module.exports =router;