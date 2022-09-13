var mongoose = require("mongoose");


const partnerSchema = mongoose.Schema({
  partnerId: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  partnerName: {
    type: String,
    required: true,
    default: "",
  },
});

 
var documentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  documentName: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    default: "",
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  lastUpdatedby: {
    type:partnerSchema,
    // required:true
  },
  lastUpdatedAt: {
    type: String,
    default: new Date(),
  },
  documentType: {
    type: String,
    enum: [
      "All Documents",
      "Agreements for Collaborations",
      "Agreements with Independent Agencies",
      "Censor or IP Registration Agreements/documents",
      "Independent Track Acquisition Agreement",
      "Link Documents (In & Out)",
      "Movie Licensing Agreement",
      "Movie Acquisition Agreement",
      "SNR for a movie (acquisition)",
      "Renewal Agreement",
      "Term Sheet",
      "Audio Addendum Agreement",
      "Audio Extension Agreement",
      "Audio NOCs",
      "Audio Sync Agreements",
      "Audio Licensing Agreement - Platform Partners",
      "Audio Licensing Agreement - Partners",
      "Album Acquisition Agreement",
    ],
    default: "",
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Accepted", "Rejected"],
  },
  agreementID: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  partner: {
    type: partnerSchema,
  },
  agreementStartDate: {
    type: String,
    required: true,
  },
  agreementEndDate: {
    type: String,
    required: true,
  },

  rights: {
    rightName: {
      type: String,
      required: true,
    },
    rightStartDate: {
      type: String,
      required: true,
    },
    rightEndDate: {
      type: String,
      required: true,
    },
    rightExclusivity: {
      type: String,
      required: true,
    },
    rightTerritories: {
      type: String,
      required: true,
    },
    rightLanguages: {
      type: String,
      required: true,
    },
    rightDubbing: {
      type: String,
      required: true,
    },
    rightRepurposingRights: {
      type: String,
      required: true,
    },
  },
  rightsExclusions: {
    exclusionsStartDate: {
      type: String,
      required: true,
    },
    exclusionsEndDate: {
      type: String,
      required: true,
    },
    exclusionsExclusivity: {
      type: String,
      required: true,
    },
    exclusionsTerritories: {
      type: String,
      required: true,
    },
    exclusionsLanguages: {
      type: String,
      required: true,
    },
    exclusionsDubbing: {
      type: String,
      required: true,
    },
    exclusionsRepurposingRights: {
      type: String,
      required: true,
    },
  },
});

var DocumentModel = mongoose.model("Document", documentSchema);
module.exports = {
  DocumentModel: DocumentModel,
};
