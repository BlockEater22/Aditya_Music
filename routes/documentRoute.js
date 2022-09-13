const documentController = require("../controllers/documentController")
const express =require("express")
const {protect} =require("../middleware/auth.middleware")


const router = express.Router()

router.get(
    "/document",
    protect,
    documentController.getAllDocument
  );
  router.get(
    "/document/:id",
    protect,
    documentController.getDocument
  );

router.post(
    "/document",
    protect,
    documentController.addDocument
  );

  router.put(
    "/document/:id",
    protect,
    documentController.updateDocument
  );

  router.delete(
    "/document/:id",
    protect,
    documentController.deleteDoucment
  );

  

  module.exports =router;