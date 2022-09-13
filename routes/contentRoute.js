const contentController = require("../controllers/contentController")
const express =require("express")
const {protect} =require("../middleware/auth.middleware")


const router = express.Router()

// router.get(
//       "/add",
//       protect,
//       contentController.add
//     );

router.post(
    "/content",
    protect,
    contentController.upload,
    contentController.addContent
  );
  
  router.put(
    "/content/:id",
    protect,
    contentController.upload,
    contentController.updateContent
  );
  
  router.delete("/content/:id",protect, contentController.deleteContent);
  
  router.get('/content',protect, contentController.getContent);
  
 
  



module.exports =router;