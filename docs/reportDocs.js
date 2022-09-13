
/**
 * @api {post} /api/report/documenttype Sending Reports Based On DocumentType
 * @apiName DocumentBytype
* @apiGroup Reports
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiBody {String} documentType  Enter document Type of Document.
* @apiError InvalidRequestBody This error will occur when user doesn't enter Document Type  
* @apiErrorExample {json} InvalidRequestBodyError-Response:
* {
*   success: false,
*   message: 'Invalid request body'
* }
* @apiError DocumentNotFound This error will occur when Document type Entered is not present in dB 
* @apiErrorExample {json} DocumentNotFoundError-Response:
* {
*   success: false,
*   message: 'Document not found!'
* }
* @apiSuccessExample {json} DocumentFoundSuccessFullySuccess-Response:
* {
*   success: true,
    data:[]
*   message: 'Document Found SuccessFully!'
* } 
 */


/**
 * @api {post} /api/report/createdat Sending Reports Based On CreatedAt Or UpdateAt 
 * @apiName DocumentByCreatedOrUpdateDate
* @apiGroup Reports
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiBody {String} [createdAt || lastUpdatedAt ]  Enter createdAt or lastUpdatedAt of Document.
* @apiError DocumentNotFound This error will occur when Document not found  
* @apiErrorExample {json} DocumentNotFoundError-Response:
* {
*   success: false,
*   message: 'Document not found!'
* }
* @apiSuccessExample {json} DocumentFoundSuccessFullySuccess-Response:
* {
*   success: true,
    data:[]
*   message: 'Document Found SuccessFully!'
* } 
 */



/**
* @api {post} /api/report/creator Sending Reports Based On Creator
* @apiName Creator
* @apiGroup Reports
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiBody {String} creator Enter creator of Document.
* @apiError InvalidRequestBody This error will occur when user doesn't enter Document Creater which is not present in DB  
* @apiErrorExample {json} InvalidRequestBodyError-Response:
* {
*   success: false,
*   message: 'Invalid request body'
* }
* @apiError DocumentNotFound This error will occur when user Entered Creator is not present in DB 
* @apiErrorExample {json} DocumentNotFoundError-Response:
* {
*   success: false,
*   message: 'Document not found!'
* }
* @apiSuccessExample {json} DocumnetFoundSuccessFullySuccess-Response:
* {
*   success: true,
    data:[]
*   message: 'Documnet Found SuccessFully!'
* } 
 */