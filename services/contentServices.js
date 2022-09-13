const { contentInfo } = require("../models/contentModel");
// getting Content From db using its Id  and user Id
const getContent = async function (id,user) {
  let content = await contentInfo.findOne({ _id: id ,user });
  if (content) {
    return content;
  } else {
    return null;
  }
};

// Adding Content service api
const addContent = async function (req, res) {
  // console.log("req.body", req.body);
  try {
    let contentData = {
      name: req.body.name,
      image: "./public/uploads/"+req.file.filename,

      category: req.body.category,

      metadata: req.body.metadata,
      user: req.user.id,
    };
    console.log("file",req.file)
    let content = new contentInfo(contentData);

    let Issaved = await content.save();
    return Issaved;
  } catch (error) {
    return res.send({ message: "Something went wrong" });
  }
};

// Deleting Content Service Api
const deleteContent = async function (id) {
  console.log("req.body", id);
  try {
    let isUpdated = await contentInfo.findOneAndDelete({ _id: id });
    return isUpdated;
  } catch (error) {
    return res.send({ message: "Something went wrong" });
  }
};

// Get all content Service Api
const getAllContent = async function (req, res) {
  const result = await contentInfo.find({ user: req.user.id });
  // console.log("user.....", req.user.id);
  if (!result) {
    return res.status(400).json({ message: "No Data Found" });
  }
  return res.send({
    status: 200,
    data: {result},
    message: "data found",
  });
};

module.exports = {
  addContent,
  getContent,

  deleteContent,
  getAllContent,
};
