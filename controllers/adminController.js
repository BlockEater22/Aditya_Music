const { DocumentModel } = require("../models/documentModel");
const documentService = require("../services/documentServices");

// This api is to update status of of document
const statusUpdate = async (req, res) => {
  try {
    // check if user has and admin permission
    if (req.user.role == "admin") {
      // Finding Document from db
      let document = await DocumentModel.findOne({ _id: req.params.id });

      // validations
      if (document == null || document == undefined || document == "") {
        return res
          .status(401)
          .send({ success: false, message: "Invalid document" });
      }
      // Finding and updating Document
      let update = await DocumentModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            status: req.body.status,
            lastUpdatedby: {
              partnerName: req.user.full_name,
            },
            lastUpdatedAt: new Date(),
          },
        }
      );
      // console.log("update", update);
      // finding One document from db and sending in response
      if (update) {
        let document = await DocumentModel.findOne({ _id: req.params.id });

        return res
          .status(201)
          .send({
            success: true,
            data: document,
            message: "Document updated successfully",
          });
      } else {
        return res
          .status(400)
          .send({ success: false, message: "Document updation failed" });
      }
    } else {
      res.status(404).send({
        success: false,
        message: "Please Enter Admins Email Address",
      });
    }
  } catch (error) {
    res.status(403).send({
      success: false,
      message: "Something went Wrong!",
    });
  }
};

module.exports = {
  statusUpdate,
};
