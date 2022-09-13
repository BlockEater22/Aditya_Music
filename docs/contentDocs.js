
/**
* @api {get} /api/content Getting All Document
* @apiName GetContent
* @apiGroup Content
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} Header-Example:
*     {
*       "Authorization": `bearer ${String}`
*     }
* @apiError ContentNotFound This error will occur when Content not Present in DB 
* @apiErrorExample {json} ContentNotFoundError-Response:
* {
*   success: false,
*   message: 'Content not found!'
* }
* @apiSuccessExample {json} ContentFoundSuccess-Response:
* {
*   success: true,
*   message: 'Content'
*   data: []
*   
* } 
 */



/**
* @api {post} /api/content Adding New Content
* @apiName AddContent
* @apiGroup Content 
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     }
* @apiBody {String} name name of file.
* @apiBody {String} image file should be added.
* @apiBody {String} category category need to be added.

* @apiError PleaseFillAllDetails This error will occur when any of the three body is empty
* @apiErrorExample {json} PleaseFillAllDetailsError-Response:
* {
*   success: false,
*   message: 'Please fill all details!'
* }
* @apiError AddingContentFailed This error will occur when content updating in Db fails 
* @apiErrorExample {json} AddingContentFailedError-Response:
* {
*   success: false,
*   message: 'Adding content failed!'
* }
* @apiSuccessExample {json} ContentAddedSuccessfullySuccess-Response:
* {
*   success: true,
*   message: 'Content Added Successfully'
*   data: {
*        "user": String,
*        "name": String,
*        "image": String,
*        "category": String,
*        "metadata": String,
*        "_id": String,
*        "created_at": String,
*        "updated_at": String,
*        "__v": Number
*    },
*   
* } 
 */



/**
* @api {put} /api/content/:id Updating Content Api
* @apiName Updatecontent
* @apiGroup Content
* @apiHeader {String} accessToken Users unique accessToken Required.
* @apiHeaderExample {json} AuthorizationHeader-Example:
*     {
*       "Authorization": `bearer ${String}`
*     } 
* @apiParam {String} id  id of Document.
* @apiBody {String} name name of image.
* @apiBody {String} image file should be added.
* @apiBody {String} category category need to be added.
* @apiError InvalidContent This error will occur when id entered not Present in DB
* @apiErrorExample {json} InvalidContentError-Response:
* {
*   success: false,
*   message: 'Invalid content'
* }
* @apiError ContentUpdationFailed This error will occur when content updating in DB fails 
* @apiErrorExample {json} ContentUpdationFailedError-Response:
* {
*   success: false,
*   message: 'Content updation failed'
* }
* @apiSuccessExample {json} ContentAddedSuccessfullySuccess-Response:
* {
*   success: true,
*   message: 'Content Added successfully'
*   data: {
*        "user": String,
*        "name": String,
*        "image": String,
*        "category": String,
*        "metadata": String,
*        "_id": String,
*        "created_at": String,
*        "updated_at": String,
*        "__v": Number
*    },
*   
* } 
 */

/**
* @api {delete} /api/content/:id Content Deleting Api
* @apiName Updatecontent
* @apiGroup Content
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
* @apiError ContentDeletionFailed This error will occur when content updating in DB fails 
* @apiErrorExample {json} ContentDeletionFailedError-Response:
* {
*   success: false,
*   message: 'Content deletion failed'
* }
* @apiSuccessExample {json} ContentDeletedSuccessfullySuccess-Response:
* {
*   success: true,
*   message: 'Content deleted successfully'
*   data: {
*        "user": String,
*        "name": String,
*        "image": String,
*        "category": String,
*        "metadata": String,
*        "_id": String,
*        "created_at": String,
*        "updated_at": String,
*        "__v": Number
*    },
*   
* } 
 */