const reportController = require("../controllers/reportController")
const express =require("express")
const {protect} =require("../middleware/auth.middleware")


const router = express.Router()


router.post(
    "/report/creator",
    protect,
    reportController.documentsByPerson
  );

  router.post(
    "/report/createdat",
    protect,
    reportController.documentByCreatedOrUpdateDate
  );
  router.post(
    "/report/documenttype",
    protect,
    reportController.documentBytype
  );
  

  module.exports =router;