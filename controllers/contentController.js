const { contentInfo } = require("../models/contentModel");

const userMod = require("../models/userModel");
const contentServices = require("../services/contentServices");
const multer = require("multer");

// Creating storage to store files
var Storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    console.log("file", file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// using multer to save files
var upload = multer({
  storage: Storage,
}).single("image");

// getting all content based on users Id
const getContent = async (req, res) => {
  try {
    console.log("postmethod all content");

    const result = await contentInfo.find({ user: req.user.id });

    // validations
    if (result == null || result == undefined || result == "") {
      return res
        .status(400)
        .send({ success: false, message: "Content not found!" });
    } else {
      res.send({ success: true, data: result, message: "Content" });
    }
  } catch (error) {
    // console.log("error", error);

    return res.send({ errorMsg: error, message: "Something went wrong" });
  }
};

// // testing auth this is for no use
// const add = async (req, res) => {
//   try {
//     res.send({ message: "prodected route" });
//   } catch (err) {
//     res.send({ message: err });
//   }
// };

// Adding Content
const addContent = async function (req, res) {
  console.log("postmethod add content");
  try {
    // validations
    if (!req.file || req.body.name == "" || req.body.category == "") {
      return res
        .status(400)
        .send({ success: true, message: "Please fill all details!" });
    }
    // Send data to Service file for further check
    let content = await contentServices.addContent(req, res);

    if (content) {
      return res.status(200).send({
        success: true,
        data: content,

        message: "Content Added successfully",
      });
    } else {
      return res
        .status(400)
        .send({ success: false, message: "Adding content failed!" });
    }
  } catch (error) {
    // console.log("err:", error);

    return res.status(400).send({
      success: false,
      message: "Something went wrong, please try again!",
    });
  }
};

const updateContent = async function (req, res) {
  console.log("postmethod add content");
  try {
    let content = await contentInfo.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (content == null || content == undefined || content == "") {
      return res
        .status(400)
        .send({ success: false, message: "Invalid content" });
    }

    let filename = "";
    if (req.file) {
      console.log("with image");
      filename = req.file.filename;

      let update = await contentInfo.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            name: req.body.name,
            image: "./public/uploads/" + filename,
            category: req.body.category,
            metadata: req.body.metadata,
          },
        }
      );
      if (update) {
        content = await contentServices.getContent(req.params.id, req.user.id);

        res.send({
          success: true,
          data: content,
          message: "Content updated successfully",
        });
      } else {
        return res.send({ success: false, message: "Content updation failed" });
      }
    } else {
      console.log("without image");
      filename = content.image;

      let update = await contentInfo.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            name: req.body.name,
            image: filename,
            category: req.body.category,
            metadata: req.body.metadata,
          },
        }
      );
      if (update) {
        content = await contentServices.getContent(req.params.id, req.user.id);

        res.send({
          success: true,
          data: content,
          message: "Content updated successfully",
        });
      } else {
        return res.send({ success: false, message: "Content updation failed" });
      }
    }

    // console.log("update", update);
  } catch (error) {
    return res.send({ success: false, message: "Something went wrong" });
  }
};

// APi for Deleting Content
const deleteContent = async function (req, res) {
  console.log("postmethod delete content");

  try {
    // getting content using users Id and content id ans sending
    let content = await contentServices.getContent(req.params.id, req.user.id);
    // console.log("contenty", content, "hhh", req.params.id);
    // validations
    if (content == null || content == undefined || content == "") {
      return res
        .status(400)
        .send({ success: false, message: "Invalid content" });
    }
    // deleting  content
    let del = await contentServices.deleteContent(req.params.id);
    if (del) {
      return res
        .status(201)
        .send({
          success: true,
          data: del,
          message: "Content deleted successfully",
        });
    } else {
      return res
        .status(400)
        .send({ success: false, message: "Content deletion failed" });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ success: false, message: "Something went wrong" });
  }
};

module.exports = {
  // add,
  upload,
  getContent,
  addContent,
  updateContent,
  deleteContent,
};
