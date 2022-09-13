const { DocumentModel } = require("../models/documentModel");

// this api finds the data by document type and send it to user in response
const documentBytype = async (req, res) => {
  try {
    console.log("postmethod all content");
    // Checking if user is sending documentType in body or payload
    if (!req.body.documentType) {
      return res.status(400).send({
        success: false,
        message: "Invalid request body",
      });
    }
    const result = await DocumentModel.find({
      documentType: req.body.documentType,
      user: req.user.id,
    });
    console.log("result", result);
    // // validations for checking if Document is present in Db
    // If present then send response and data else give only response message
    if (result == null || result == undefined || result == "") {
      return res
        .status(404)
        .send({ success: false, message: "Document not found!" });
    } else {
      return res
        .status(200)
        .send({
          success: true,
          data: result,
          message: "Document Found SuccessFully!",
        });
    }
  } catch (error) {
    // console.log("error", error);

    return res.send({ success: false, message: "Something went wrong" });
  }
};

// this api finds the data by Createddate or updated date and send it to user in response
const documentByCreatedOrUpdateDate = async (req, res) => {
  try {
    console.log("postmethod all content");
    // if user sends Created At in req.body then if will execute
    if (req.body.createdAt) {
      const result = await DocumentModel.findOne({
        createdAt: req.body.createdAt,

        user: req.user.id,
      });
      // console.log("result", result);
      // validations
      if (result == null || result == undefined || result == "") {
        return res
          .status(404)
          .send({ success: false, message: "Document not found!" });
      } else {
        console.log("data", result);
        return res
          .status(200)
          .send({
            success: true,
            data: result,
            message: "Documnet Found SuccessFully!",
          });
      }
    }
    // if user enter Last Updated At in req.body this code will execute
    else if (req.body.lastUpdatedAt) {
      // finding query from Document Model
      const result = await DocumentModel.findOne({
        lastUpdatedAt: req.body.lastUpdatedAt,
        user: req.user.id,
      });
      //   console.log("result", result);
      // validations
      if (result == null || result == undefined || result == "") {
        return res.status(404).send({ message: "Document not found!" });
      } else {
        return res
          .status(200)
          .send({ data: result, message: "Documnet Found SuccessFully!" });
      }
    }
  } catch (error) {
    // console.log("error", error);

    return res.send({ errorMsg: error, message: "Something went wrong" });
  }
};
// this api finds the data by Person name and send it to user in response
const documentsByPerson = async (req, res) => {
  try {
    console.log("postmethod all content");
    if (!req.body.creator) {
      return res.status(400).send({
        success: false,
        message: "Invalid request body",
      });
    }
    const result = await DocumentModel.findOne({
      creator: req.body.creator,
      user: req.user.id,
    });
    console.log("result", result);
    // validations for checking if Document is present in Db
    // If present the send response and data else give only response message
    if (result == null || result == undefined || result == "") {
      return res
        .status(404)
        .send({ success: false, message: "Document not found!" });
    } else {
      return res
        .status(200)
        .send({
          success: true,
          data: result,
          message: "Documnet Found SuccessFully!",
        });
    }
  } catch (error) {
    // console.log("error", error);

    return res.send({ success: false, message: "Something went wrong" });
  }
};
module.exports = {
  documentBytype,
  documentByCreatedOrUpdateDate,
  documentsByPerson,
};
