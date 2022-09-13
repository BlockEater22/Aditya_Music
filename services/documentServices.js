const { DocumentModel } = require("../models/documentModel");

// Getting single Document using its id and user ID
const getDocument = async function (id, user) {
  let content = await DocumentModel.findOne({ _id: id, user });
  if (content) {
    return content;
  } else {
    return null;
  }
};

// Deleting Document by Id
const deleteDocument = async function (id) {
  console.log("req.body", id);
  try {
    let isUpdated = await DocumentModel.findOneAndDelete({ _id: id });
    return isUpdated;
  } catch (error) {
    return res.send({ message: "Something went wrong" });
  }
};

module.exports = {
  getDocument,

  deleteDocument,
};
