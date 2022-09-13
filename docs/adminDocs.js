
/**
* @api {post} /api/admin/updatestatus/:id Update Status-only for admin
* @apiName Updatestatus
* @apiGroup Admin
* @apiParam {String} id  id of Document.
* @apibody {String} status  [Accepted|Rejected] status of Document.
* @apiHeaderExample {json} Header-Example:
*     {
*       "Authorization": `bearer ${String}`
*     }
* @apiError InvalidDocument This error will occur when document with provided id not Present in Database 
* @apiErrorExample {json} InvalidDocumentError-Response:
* {
*   success: false,
*   message: 'Invalid document'
* }
* @apiError DocumentUpdationFailed This error will occur when document updating in Db fails 
* @apiErrorExample {json} DocumentUpdationFailedError-Response:
* {
*   success: false,
*   message: 'Document updation failed'
* }
* @apiError PleaseEnterAdminsEmailAddress This error will occur when user does not have admin access hits this api 
* @apiErrorExample {json} PleaseEnterAdminsEmailAddressError-Response:
* {
*   success: false,
*   message: 'Please Enter Admins Email Address'
* } 
* @apiSuccessExample {json} DocumentUpdatedSuccessfullySuccess-Response :
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
* } 
 */