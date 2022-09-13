
/**
* @api {get} /api/document Get All Document API
* @apiName GetAllDocument
* @apiGroup Document
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiError DocumentNotFound This error will occur when there is no document in DB 
* @apiErrorExample {json} DocumentNotFoundError-Response:
* {
*   success: false,
*   message: 'Document not found!'
* }
* @apiSuccessExample {json} DocumnetFoundSuccessFullySuccess-Response:
* {
*   success: true,
*   message: 'Documnet Found SuccessFully!'
*   data: []  
* } 
 */

/**
* @api {get} /api/document/:id Get Single Document Api  
* @apiName GetDocument
* @apiGroup Document
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiParam {String} id  id of Document.
* @apiError DocumentNotFound This error will occur when there is no document with given ID in Database 
* @apiErrorExample {json} DocumentNotFoundError-Response:
* {
*   success: false,
*   message: 'Document not found!'
* }
* @apiSuccessExample {json} DocumnetFoundSuccessFullySuccess-Response:
* {
*   success: true,
*   message: 'Documnet Found SuccessFully!'
*   data: {
*        "rights": {
*            "rightName": String,
*            "rightStartDate": String,
*            "rightEndDate": String,
*            "rightExclusivity": String,
*            "rightTerritories": String,
*            "rightLanguages": String,
*            "rightDubbing": String,
*            "rightRepurposingRights": String
*        },
*        "rightsExclusions": {
*            "exclusionsStartDate": String,
*            "exclusionsEndDate": String,
*            "exclusionsExclusivity": String,
*            "exclusionsTerritories": String,
*            "exclusionsLanguages": String,
*            "exclusionsDubbing": String,
*            "exclusionsRepurposingRights": String
*        },
*        "_id": String,
*        "user": String,
*        "documentName": String,
*        "creator": String,
*        "createdAt": String,
*        "lastUpdatedAt": Date,
*        "documentType": String,
*        "status": String,
*        "agreementID": String,
*        "agreementStartDate": String,
*        "agreementEndDate": String,
*        "__v": Integer,
*        "lastUpdatedby": {
*            "partnerId": String,
*            "partnerName": String,
*            "_id": String
*        }
*    },
*       
*   
* } 
 */


/**
* @api {post} /api/document/ Add Document API  
* @apiName AddDocument
* @apiGroup Document
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiBody {String} documentName  documentName of Document.
* @apiBody {String} documentType  documentType of Document.
* @apiBody {String} agreementStartDate  agreementStartDate of Document.
* @apiBody {String} agreementEndDate  agreementEndDate of Document.
* @apiBody {String} rightName  rightName of Document.
* @apiBody {String} rightStartDate  rightStartDate of Document.
* @apiBody {String} rightEndDate  rightEndDate of Document.
* @apiBody {String} rightExclusivity  rightExclusivity of Document.
* @apiBody {String} rightTerritories  rightTerritories of Document.
* @apiBody {String} rightLanguages  rightLanguages of Document.
* @apiBody {String} rightDubbing  rightDubbing of Document.
* @apiBody {String} rightRepurposingRights  rightRepurposingRights of Document.
* @apiBody {String} exclusionsStartDate  exclusionsStartDate of Document.
* @apiBody {String} exclusionsEndDate  exclusionsEndDate of Document.
* @apiBody {String} exclusionsExclusivit   exclusionsExclusivit of Document.
* @apiBody {String} exclusionsTerritories   exclusionsTerritories of Document.
* @apiBody {String} exclusionsLanguages  exclusionsLanguages of Document.
* @apiBody {String} exclusionsDubbing  exclusionsDubbing of Document.
* @apiBody {String} exclusionsRepurposingRights  exclusionsRepurposingRights of Document.
* @apiError DocumentNameIsRequired This Error Will Occur When Document Name Is Not Entered 
* @apiErrorExample {json} DocumentNameIsRequiredError-Response:
* {
*   success: false,
*   message: 'DocumentName is Required!'
* }
* @apiError DocumentTypeIsRequired This Error Will Occur When Document Type Is Not Entered 
* @apiErrorExample {json} DocumentTypeIsRequiredError-Response:
* {
*   success: false,
*   message: 'DocumentType is Required!'
* }
* @apiError AgreementStartDateIsRequired This Error Will Occur When AgreementStartDate Is Not Entered 
* @apiErrorExample {json} AgreementStartDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'agreementStartDate is Required!'
* }
* @apiError AgreementEndDateIsRequired This Error Will Occur When AgreementEndDate Is Not Entered 
* @apiErrorExample {json} AgreementEndDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'AgreementEndDate is Required!'
* }
* @apiError RightNameIsRequired This Error Will Occur When RightName Is Not Entered 
* @apiErrorExample {json} RightNameIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightName is Required!'
* }
* @apiError RightStartDateIsRequired This Error Will Occur When RightStartDate Is Not Entered 
* @apiErrorExample {json} rightStartDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightStartDate is Required!'
* }
* @apiError RightEndDateIsRequired This Error Will Occur When RightEndDate Is Not Entered 
* @apiErrorExample {json} rightEndDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightEndDate is Required!'
* }
* @apiError RightExclusivityIsRequired This Error Will Occur When rightExclusivity Is Not Entered 
* @apiErrorExample {json} rightExclusivityIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightExclusivity is Required!'
* }
* @apiError RightTerritoriesIsRequired This Error Will Occur When rightTerritories Is Not Entered 
* @apiErrorExample {json} rightTerritoriesIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightTerritories is Required!'
* }
* @apiError RightLanguagesIsRequired This Error Will Occur When rightLanguages Is Not Entered 
* @apiErrorExample {json} rightLanguagesIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightLanguages is Required!'
* }
* @apiError RightDubbingIsRequired This Error Will Occur When rightDubbing Is Not Entered 
* @apiErrorExample {json} rightDubbingIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightDubbing is Required!'
* }
* @apiError rightRepurposingRightsIsRequired This Error Will Occur When rightRepurposingRights Is Not Entered 
* @apiErrorExample {json} rightRepurposingRightsIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightRepurposingRights is Required!'
* }
* @apiError ExclusionsStartDateIsRequired This Error Will Occur When exclusionsStartDate Is Not Entered 
* @apiErrorExample {json} exclusionsStartDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsStartDate is Required!'
* }
* @apiError ExclusionsEndDateIsRequired This Error Will Occur When exclusionsEndDate Is Not Entered 
* @apiErrorExample {json} exclusionsEndDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsEndDate is Required!'
* }
* @apiError exclusionsExclusivityIsRequired This Error Will Occur When exclusionsExclusivity Is Not Entered 
* @apiErrorExample {json} exclusionsExclusivityIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsExclusivity is Required!'
* }
* @apiError exclusionsTerritoriesIsRequired This Error Will Occur When exclusionsTerritories Is Not Entered 
* @apiErrorExample {json} exclusionsTerritoriesIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsTerritories is Required!'
* }
* @apiError exclusionsLanguagesIsRequired This Error Will Occur When exclusionsLanguages Is Not Entered 
* @apiErrorExample {json} exclusionsLanguagesIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsLanguages is Required!'
* }
* @apiError exclusionsDubbingIsRequired This Error Will Occur When exclusionsDubbing Is Not Entered 
* @apiErrorExample {json} exclusionsDubbingIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsDubbing is Required!'
* }
* @apiError exclusionsRepurposingRightsIsRequired This Error Will Occur When exclusionsRepurposingRights Is Not Entered 
* @apiErrorExample {json} exclusionsRepurposingRightsIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsRepurposingRights is Required!'
* }
* @apiError MaxLength This Error Will Occur When Max length Of DocumentName is More Then is 48 
* @apiErrorExample {json} MaxLengthError-Response:
* {
*   success: false,
*   message: 'Max length is 48'
* }
* @apiError AddingContentFailed This Error Will Occur When There is Some Problem in Connection to DB 
* @apiErrorExample {json} AddingContentFailedError-Response:
* {
*   success: false,
*   message: 'Adding content failed!'
* }

* @apiSuccessExample {json} DocumentAddedSuccessfullySuccess-Response:
* {
*   success: true,
*   message: 'Event added successfully'
*   data: {
*        "rights": {
*            "rightName": String,
*            "rightStartDate": String,
*            "rightEndDate": String,
*            "rightExclusivity": String,
*            "rightTerritories": String,
*            "rightLanguages": String,
*            "rightDubbing": String,
*            "rightRepurposingRights": String
*        },
*        "rightsExclusions": {
*            "exclusionsStartDate": String,
*            "exclusionsEndDate": String,
*            "exclusionsExclusivity": String,
*            "exclusionsTerritories": String,
*            "exclusionsLanguages": String,
*            "exclusionsDubbing": String,
*            "exclusionsRepurposingRights": String
*        },
*        "_id": String,
*        "user": String,
*        "documentName": String,
*        "creator": String,
*        "createdAt": String,
*        "lastUpdatedAt": Date,
*        "documentType": String,
*        "status": String,
*        "agreementID": String,
*        "agreementStartDate": String,
*        "agreementEndDate": String,
*        "__v": Integer,
*        "lastUpdatedby": {
*            "partnerId": String,
*            "partnerName": String,
*            "_id": String
*        }
*    },
*       
*   
* } 
 */


/**
* @api {put} /api/document/:id Update Document API  
* @apiName UpdateDocument
* @apiGroup Document
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiParam {String} id  Id of Document.
* @apiBody {String} documentName  documentName of Document.
* @apiBody {String} documentType  documentType of Document.
* @apiBody {String} agreementStartDate  agreementStartDate of Document.
* @apiBody {String} agreementEndDate  agreementEndDate of Document.
* @apiBody {String} rightName  rightName of Document.
* @apiBody {String} rightStartDate  rightStartDate of Document.
* @apiBody {String} rightEndDate  rightEndDate of Document.
* @apiBody {String} rightExclusivity  rightExclusivity of Document.
* @apiBody {String} rightTerritories  rightTerritories of Document.
* @apiBody {String} rightLanguages  rightLanguages of Document.
* @apiBody {String} rightDubbing  rightDubbing of Document.
* @apiBody {String} rightRepurposingRights  rightRepurposingRights of Document.
* @apiBody {String} exclusionsStartDate  exclusionsStartDate of Document.
* @apiBody {String} exclusionsEndDate  exclusionsEndDate of Document.
* @apiBody {String} exclusionsExclusivit   exclusionsExclusivit of Document.
* @apiBody {String} exclusionsTerritories   exclusionsTerritories of Document.
* @apiBody {String} exclusionsLanguages  exclusionsLanguages of Document.
* @apiBody {String} exclusionsDubbing  exclusionsDubbing of Document.
* @apiBody {String} exclusionsRepurposingRights  exclusionsRepurposingRights of Document.
* @apiError DocumentNameIsRequired This Error Will Occur When Document Name Is Not Entered 
* @apiErrorExample {json} DocumentNameIsRequiredError-Response:
* {
*   success: false,
*   message: 'DocumentName is Required!'
* }
* @apiError DocumentTypeIsRequired This Error Will Occur When Document Type Is Not Entered 
* @apiErrorExample {json} DocumentTypeIsRequiredError-Response:
* {
*   success: false,
*   message: 'DocumentType is Required!'
* }
* @apiError AgreementStartDateIsRequired This Error Will Occur When AgreementStartDate Is Not Entered 
* @apiErrorExample {json} AgreementStartDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'agreementStartDate is Required!'
* }
* @apiError AgreementEndDateIsRequired This Error Will Occur When AgreementEndDate Is Not Entered 
* @apiErrorExample {json} AgreementEndDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'AgreementEndDate is Required!'
* }
* @apiError RightNameIsRequired This Error Will Occur When RightName Is Not Entered 
* @apiErrorExample {json} RightNameIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightName is Required!'
* }
* @apiError RightStartDateIsRequired This Error Will Occur When RightStartDate Is Not Entered 
* @apiErrorExample {json} rightStartDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightStartDate is Required!'
* }
* @apiError RightEndDateIsRequired This Error Will Occur When RightEndDate Is Not Entered 
* @apiErrorExample {json} rightEndDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightEndDate is Required!'
* }
* @apiError RightExclusivityIsRequired This Error Will Occur When rightExclusivity Is Not Entered 
* @apiErrorExample {json} rightExclusivityIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightExclusivity is Required!'
* }
* @apiError RightTerritoriesIsRequired This Error Will Occur When rightTerritories Is Not Entered 
* @apiErrorExample {json} rightTerritoriesIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightTerritories is Required!'
* }
* @apiError RightLanguagesIsRequired This Error Will Occur When rightLanguages Is Not Entered 
* @apiErrorExample {json} rightLanguagesIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightLanguages is Required!'
* }
* @apiError RightDubbingIsRequired This Error Will Occur When rightDubbing Is Not Entered 
* @apiErrorExample {json} rightDubbingIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightDubbing is Required!'
* }
* @apiError rightRepurposingRightsIsRequired This Error Will Occur When rightRepurposingRights Is Not Entered 
* @apiErrorExample {json} rightRepurposingRightsIsRequiredError-Response:
* {
*   success: false,
*   message: 'rightRepurposingRights is Required!'
* }
* @apiError ExclusionsStartDateIsRequired This Error Will Occur When exclusionsStartDate Is Not Entered 
* @apiErrorExample {json} exclusionsStartDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsStartDate is Required!'
* }
* @apiError ExclusionsEndDateIsRequired This Error Will Occur When exclusionsEndDate Is Not Entered 
* @apiErrorExample {json} exclusionsEndDateIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsEndDate is Required!'
* }
* @apiError exclusionsExclusivityIsRequired This Error Will Occur When exclusionsExclusivity Is Not Entered 
* @apiErrorExample {json} exclusionsExclusivityIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsExclusivity is Required!'
* }
* @apiError exclusionsTerritoriesIsRequired This Error Will Occur When exclusionsTerritories Is Not Entered 
* @apiErrorExample {json} exclusionsTerritoriesIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsTerritories is Required!'
* }
* @apiError exclusionsLanguagesIsRequired This Error Will Occur When exclusionsLanguages Is Not Entered 
* @apiErrorExample {json} exclusionsLanguagesIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsLanguages is Required!'
* }
* @apiError exclusionsDubbingIsRequired This Error Will Occur When exclusionsDubbing Is Not Entered 
* @apiErrorExample {json} exclusionsDubbingIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsDubbing is Required!'
* }
* @apiError exclusionsRepurposingRightsIsRequired This Error Will Occur When exclusionsRepurposingRights Is Not Entered 
* @apiErrorExample {json} exclusionsRepurposingRightsIsRequiredError-Response:
* {
*   success: false,
*   message: 'exclusionsRepurposingRights is Required!'
* }
* @apiError MaxLength This Error Will Occur When Max length Of DocumentName is More Then is 48 
* @apiErrorExample {json} MaxLengthError-Response:
* {
*   success: false,
*   message: 'Max length is 48'
* }
* @apiError InvalidContent This Error Will Occur When Documnt id entered not Present in DB 
* @apiErrorExample {json} InvalidContentError-Response:
* {
*   success: false,
*   message: 'Invalid content'
* }
* @apiError DocumentUpdationFailed" This Error Will Occur When There is Some Problem in Connection to DB 
* @apiErrorExample {json} DocumentUpdationFailedError-Response:
* {
*   success: false,
*   message: 'Document updation failed'
* }

* @apiSuccessExample {json} DocumentUpdatedSuccessfullySuccess-Response:
* {
*   success: true,
*   message: 'Document updated successfully'
*   data: {
*        "rights": {
*            "rightName": String,
*            "rightStartDate": String,
*            "rightEndDate": String,
*            "rightExclusivity": String,
*            "rightTerritories": String,
*            "rightLanguages": String,
*            "rightDubbing": String,
*            "rightRepurposingRights": String
*        },
*        "rightsExclusions": {
*            "exclusionsStartDate": String,
*            "exclusionsEndDate": String,
*            "exclusionsExclusivity": String,
*            "exclusionsTerritories": String,
*            "exclusionsLanguages": String,
*            "exclusionsDubbing": String,
*            "exclusionsRepurposingRights": String
*        },
*        "_id": String,
*        "user": String,
*        "documentName": String,
*        "creator": String,
*        "createdAt": String,
*        "lastUpdatedAt": Date,
*        "documentType": String,
*        "status": String,
*        "agreementID": String,
*        "agreementStartDate": String,
*        "agreementEndDate": String,
*        "__v": Integer,
*        "lastUpdatedby": {
*            "partnerId": String,
*            "partnerName": String,
*            "_id": String
*        }
*    },
*       
*   
* } 
 */



/**
* @api {delete} /api/document/:id Document Deleting Api
* @apiName DeleteDocument
* @apiGroup Document
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiParam {String} id  id of Document.
* @apiError InvalidContent This error will occur when id entered not Present in DB
* @apiErrorExample {json} InvalidContentError-Response:
* {
*   success: false,
*   message: 'Invalid content'
* }
* @apiError ContentDeletionFailed This error will occur when Document Fail in DB fails 
* @apiErrorExample {json} DocumentDeletionFailedError-Response:
* {
*   success: false,
*   message: 'Document deletion failed'
* }
* @apiSuccessExample {json} DocumentDeletedSuccessfullySuccess-Response:
* {
*   success: true,
*   message: 'Document deleted successfully'
*   data: {
*        "rights": {
*            "rightName": String,
*            "rightStartDate": String,
*            "rightEndDate": String,
*            "rightExclusivity": String,
*            "rightTerritories": String,
*            "rightLanguages": String,
*            "rightDubbing": String,
*            "rightRepurposingRights": String
*        },
*        "rightsExclusions": {
*            "exclusionsStartDate": String,
*            "exclusionsEndDate": String,
*            "exclusionsExclusivity": String,
*            "exclusionsTerritories": String,
*            "exclusionsLanguages": String,
*            "exclusionsDubbing": String,
*            "exclusionsRepurposingRights": String
*        },
*        "_id": String,
*        "user": String,
*        "documentName": String,
*        "creator": String,
*        "createdAt": String,
*        "lastUpdatedAt": Date,
*        "documentType": String,
*        "status": String,
*        "agreementID": String,
*        "agreementStartDate": String,
*        "agreementEndDate": String,
*        "__v": Integer,
*        "lastUpdatedby": {
*            "partnerId": String,
*            "partnerName": String,
*            "_id": String
*        }
*    },
*   
* } 
 */


