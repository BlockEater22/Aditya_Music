const { DocumentModel } = require("../models/documentModel");
const documentService = require("../services/documentServices");

// Adding Document api
const addDocument = async (req, res) => {
  // Payload from user
  const {
    documentName,
    documentType,
    agreementStartDate,
    agreementEndDate,
    rightName,
    rightStartDate,
    rightEndDate,
    rightExclusivity,
    rightTerritories,
    rightLanguages,
    rightDubbing,
    rightRepurposingRights,
    exclusionsStartDate,
    exclusionsEndDate,
    exclusionsExclusivity,
    exclusionsTerritories,
    exclusionsLanguages,
    exclusionsDubbing,
    exclusionsRepurposingRights,
  } = req.body;
  // console.log("body", req.body);
  try {
    if (documentType == "Album Acquisition Agreement") {
      if (documentName == "" || documentName == undefined) {
        return res.status(201).send({
          status: false,
          message: "DocumentName is Required!",
        });
      } else if (agreementStartDate == "" || agreementStartDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "agreementStartDate is Required!",
        });
      } else if (agreementEndDate == "" || agreementEndDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "agreementEndDate is Required!",
        });
      } else if (rightName == "" || rightName == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightName is Required!",
        });
      } else if (rightStartDate == "" || rightStartDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightStartDate is Required!",
        });
      } else if (rightEndDate == "" || rightEndDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightEndDate is Required!",
        });
      } else if (rightExclusivity == "" || rightExclusivity == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightExclusivity is Required!",
        });
      } else if (rightTerritories == "" || rightTerritories == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightTerritories is Required!",
        });
      } else if (rightLanguages == "" || rightLanguages == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightLanguages is Required!",
        });
      } else if (rightDubbing == "" || rightDubbing == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightDubbing is Required!",
        });
      } else if (
        rightRepurposingRights == "" ||
        rightRepurposingRights == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "rightRepurposingRights is Required!",
        });
      } else if (
        exclusionsStartDate == "" ||
        exclusionsStartDate == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsStartDate is Required!",
        });
      } else if (exclusionsEndDate == "" || exclusionsEndDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "exclusionsEndDate is Required!",
        });
      } else if (
        exclusionsExclusivity == "" ||
        exclusionsExclusivity == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsExclusivity is Required!",
        });
      } else if (
        exclusionsTerritories == "" ||
        exclusionsTerritories == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsTerritories is Required!",
        });
      } else if (
        exclusionsLanguages == "" ||
        exclusionsLanguages == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsLanguages is Required!",
        });
      } else if (exclusionsDubbing == "" || exclusionsDubbing == undefined) {
        return res.status(201).send({
          status: false,
          message: "exclusionsDubbing is Required!",
        });
      } else if (
        exclusionsRepurposingRights == "" ||
        exclusionsRepurposingRights == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsRepurposingRights is Required!",
        });
      }
      else if (documentName.length > 48) {
        return res.status(400).send({
          status: false,
          message: "Max length is 48",
        });
      }
      // Adding document in Db
      else {
        const doc = {
          creator: req.user.full_name,
          user: req.user.id,
          documentName,
          documentType,
          agreementStartDate,
          agreementEndDate,
          rights: {
            rightName,
            rightStartDate,
            rightEndDate,
            rightExclusivity,
            rightTerritories,
            rightLanguages,
            rightDubbing,
            rightRepurposingRights,
          },
          rightsExclusions: {
            exclusionsStartDate,
            exclusionsEndDate,
            exclusionsExclusivity,
            exclusionsTerritories,
            exclusionsLanguages,
            exclusionsDubbing,
            exclusionsRepurposingRights,
          },
        };
        const content = new DocumentModel(doc);
        // console.log(content);
        const isSaved = await content.save();
        if (isSaved) {
          return res.status(200).send({
            success: true,
            data: { isSaved },
            message: "Event added successfully",
          });
        } else {
          return res.status(201).send({
            success: false,

            message: "Adding content failed!",
          });
        }
      }
    }
    else {
      if (documentName == "" || documentName == undefined) {
        return res.status(201).send({
          status: false,
          message: "DocumentName is Required!",
        });
      }
      if (documentType == "" || documentType == undefined) {
        return res.status(201).send({
          status: false,
          message: "DocumentType is Required!",
        });
      } else if (documentName.length > 48) {
        return res.send({
          message: "Max length is 48",
        });
      } else {
        const doc = {
          documentName,
          documentType,
          creator: req.user.full_name,
        };
        const content = new DocumentModel(doc);
        // console.log(content);
        const isSaved = await content.save();
        if (isSaved) {
          return res.status(200).send({
            success: true,
            data: isSaved,
            message: "Event added successfully",
          });
        } else {
          return res.status(201).send({
            success: false,
            message: "Adding content failed!",
          });
        }
      }
    }
  } catch (error) {
    // console.log("error",error)
    return res.send({
      success: false,
      message: "something went wrong!",
    });
  }
};

// Deleting Document Api
const deleteDoucment = async (req, res) => {
  console.log("postmethod delete Document");

  try {
    let Document = await documentService.getDocument(
      req.params.id,
      req.user.id
    );
    console.log("document", Document);
    // validations
    if (Document == null || Document == undefined || Document == "") {
      return res.send({ success: false, message: "Invalid content" });
    }

    let del = await documentService.deleteDocument(req.params.id);
    if (del) {
      return res
        .status(201)
        .send({
          success: true,
          data: del,
          message: "Document deleted successfully",
        });
    } else {
      return res
        .status(400)
        .send({ success: false, message: "Document deletion failed" });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ success: false, message: "Something went wrong" });
  }
};

// updating Document Api
const updateDocument = async (req, res) => {
  const {
    documentName,
    documentType,
    agreementStartDate,
    agreementEndDate,
    rightName,
    rightStartDate,
    rightEndDate,
    rightExclusivity,
    rightTerritories,
    rightLanguages,
    rightDubbing,
    rightRepurposingRights,
    exclusionsStartDate,
    exclusionsEndDate,
    exclusionsExclusivity,
    exclusionsTerritories,
    exclusionsLanguages,
    exclusionsDubbing,
    exclusionsRepurposingRights,
  } = req.body;
  try {
    if (req.body.documentType === "Album Acquisition Agreement") {
      if (documentName == "" || documentName == undefined) {
        return res.status(201).send({
          status: false,
          message: "DocumentName is Required!",
        });
      } else if (agreementStartDate == "" || agreementStartDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "agreementStartDate is Required!",
        });
      } else if (agreementEndDate == "" || agreementEndDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "agreementEndDate is Required!",
        });
      } else if (rightName == "" || rightName == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightName is Required!",
        });
      } else if (rightStartDate == "" || rightStartDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightStartDate is Required!",
        });
      } else if (rightEndDate == "" || rightEndDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightEndDate is Required!",
        });
      } else if (rightExclusivity == "" || rightExclusivity == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightExclusivity is Required!",
        });
      } else if (rightTerritories == "" || rightTerritories == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightTerritories is Required!",
        });
      } else if (rightLanguages == "" || rightLanguages == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightLanguages is Required!",
        });
      } else if (rightDubbing == "" || rightDubbing == undefined) {
        return res.status(201).send({
          status: false,
          message: "rightDubbing is Required!",
        });
      } else if (
        rightRepurposingRights == "" ||
        rightRepurposingRights == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "rightRepurposingRights is Required!",
        });
      } else if (
        exclusionsStartDate == "" ||
        exclusionsStartDate == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsStartDate is Required!",
        });
      } else if (exclusionsEndDate == "" || exclusionsEndDate == undefined) {
        return res.status(201).send({
          status: false,
          message: "exclusionsEndDate is Required!",
        });
      } else if (
        exclusionsExclusivity == "" ||
        exclusionsExclusivity == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsExclusivity is Required!",
        });
      } else if (
        exclusionsTerritories == "" ||
        exclusionsTerritories == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsTerritories is Required!",
        });
      } else if (
        exclusionsLanguages == "" ||
        exclusionsLanguages == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsLanguages is Required!",
        });
      } else if (exclusionsDubbing == "" || exclusionsDubbing == undefined) {
        return res.status(201).send({
          status: false,
          message: "exclusionsDubbing is Required!",
        });
      } else if (
        exclusionsRepurposingRights == "" ||
        exclusionsRepurposingRights == undefined
      ) {
        return res.status(201).send({
          status: false,
          message: "exclusionsRepurposingRights is Required!",
        });
      } else if (documentName.length > 48) {
        return res.status(400).send({
          success: false,
          message: "Max length is 48",
        });
      } else {
        let content = await documentService.getDocument(
          req.params.id,
          req.user.id
        );

        // validations
        if (content == null || content == undefined || content == "") {
          return res
            .status(400)
            .send({ success: false, message: "Invalid content" });
        }

        let update = await DocumentModel.updateOne(
          { _id: req.params.id },
          {
            $set: {
              documentName,
              documentType,
              agreementStartDate,
              agreementEndDate,
              lastUpdatedAt: new Date(),
              rights: {
                rightName,
                rightStartDate,
                rightEndDate,
                rightExclusivity,
                rightTerritories,
                rightLanguages,
                rightDubbing,
                rightRepurposingRights,
              },
              rightsExclusions: {
                exclusionsStartDate,
                exclusionsEndDate,
                exclusionsExclusivity,
                exclusionsTerritories,
                exclusionsLanguages,
                exclusionsDubbing,
                exclusionsRepurposingRights,
              },
            },
          }
        );
        // console.log("update", update);
        if (update) {
          document = await documentService.getDocument(
            req.params.id,
            req.user.id
          );

          return res.status(201).send({
            success: true,
            data: document,
            message: "Document updated successfully",
          });
        } else {
          return res
            .status(400)
            .send({ success: false, message: "Document updation failed" });
        }
      }
    } else {
      if (documentName == "" || documentName == undefined) {
        return res.status(201).send({
          status: false,
          message: "DocumentName is Required!",
        });
      }
      if (documentType == "" || documentType == undefined) {
        return res.status(201).send({
          status: false,
          message: "DocumentType is Required!",
        });
      } else if (documentName.length > 48) {
        return res.status(400).send({
          success: false,
          message: "Max length is 48",
        });
      } else {
        let document = await documentService.getDocument(
          req.params.id,
          req.user.id
        );

        // validations
        if (document == null || document == undefined || document == "") {
          return res
            .status(401)
            .send({ success: false, message: "Invalid document" });
        }

        let update = await DocumentModel.findByIdAndUpdate(
          { _id: req.params.id },
          {
            $set: {
              documentName,
              documentType,
              lastUpdatedAt: new Date(),
            },
          }
        );
        // console.log("update", update);
        if (update) {
          document = await documentService.getDocument(
            req.params.id,
            req.user.id
          );

          return res
            .status(201)
            .send({ data: document, message: "Document updated successfully" });
        } else {
          return res.status(400).send({ message: "Document updation failed" });
        }
      }
    }
  } catch (error) {
    return res
      .status(400)
      .send({ errorMsg: error, message: "Something went wrong" });
  }
};

// Getting All Document Api
const getAllDocument = async (req, res) => {
  try {
    console.log("postmethod all content");

    const result = await DocumentModel.find({ user: req.user.id });

    // validations
    if (result == null || result == undefined || result == "") {
      return res
        .status(404)
        .send({ success: false, message: "Document not found!" });
    } else {
      return res.status(200).send({
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

// Getting single Document Api
const getDocument = async (req, res) => {
  try {
    console.log("postmethod all content");

    const result = await DocumentModel.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    // validations
    if (result == null || result == undefined || result == "") {
      return res
        .status(404)
        .send({ success: false, message: "Document not found!" });
    } else {
      return res.status(200).send({
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
  addDocument,
  deleteDoucment,
  updateDocument,
  getAllDocument,
  getDocument,
};
