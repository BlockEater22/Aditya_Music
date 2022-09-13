/**
 * @api {post} /api/user/register User Registration APi
 * @apiName Register
* @apiGroup Users
* @apibody {String} full_name full Name of User.
* @apibody {String} email email address of User.
* @apibody {String} password of user account.
* @apiError FullNameRequired This error will occur when Full Name is not provided 
* @apiErrorExample {json} FullNameRequiredError-Response:
* {
*   success: false,
*   message: 'Full Name is Required!'
* }
* @apiError EmailIsRequired This error will occur when Email is not provided 
* @apiErrorExample {json} EmailIsRequiredError-Response:
* {
*   success: false,
*   message: 'Email is Required!'
* }
* @apiError PasswordIsRequired This error will occur when Password is not provided 
* @apiErrorExample {json} PasswordIsRequiredError-Response:
* {
*   success: false,
*   message: 'Password is Required!'
* }
* @apiError PleaseEnterCorrectEmail This error will occur when user dont enter valid email eddress 
* @apiErrorExample {json} PleaseEnterCorrectEmailError-Response:
* {
*   success: false,
*   message: 'Please enter correct email!'
* }
* @apiError PasswordMustBeCombinationError This error will occur when password is less then 6 digit and is not combination of one one UpperCase,Lowercase Letter and number is not provided 
* @apiErrorExample {json} PasswordMustBeCombinationError-Response:
* {
*   success: false,
*   message: 'Password must have at least 6 characters,at least one Lowercase ,one uppercase and one number!'
* }
* @apiError UserAlreadyExist This error will occur when User is Already Exist
* @apiErrorExample {json} UserAlreadyExistError-Response:
* {
*   success: false,
*   message: 'user already exist'
* }
* @apiError InValidUserData This error will occur when User Enter Some Invalid data
* @apiErrorExample {json} InValidUserDataError-Response:
* {
*   success: false,
*   message: 'InValid User Data!'
* }
* 
* @apiSuccessExample {json} RegisteredSuccessfullySuccess-Response:
* {
*   success: true,
*   message: 'Registered Successfully'
* } 
 */


/**
 * @api {post} /api/user/login User Login API
 * @apiName Login
* @apiGroup Users
* @apibody {String} email email address of User.
* @apibody {String} password of user account.
* @apiError PleaseAddAllFields This error will occur when Email or password not entered 
* @apiErrorExample {json} PleaseAddAllFieldsError-Response:
* {
*   success: false,
*   message: 'Please add all fields'
* }
* @apiError EmailDoesNotMatch This error will occur when Email does not match 
* @apiErrorExample {json} EmailDoesNotMatchError-Response:
* {
*   success: false,
*   message: 'email Does Not Match'
* }
* @apiError PasswordDoesNotMatch This error will occur when Password does not match 
* @apiErrorExample {json} PasswordDoesNotMatchError-Response:
* {
*   success: false,
*   message: 'Password Does Not Match'
* }
* @apiSuccessExample {json} LoginSuccessfullySuccess-Response:
* {
*   success: true,
    result:{
        accessToken: string
        refreshToken: String
    }
*   message: 'login Successfully'
* } 
 */



/**
 * @api {post} /api/user/refresh Generating New AccessToken Api
 * @apiName NewAccessToken
* @apiGroup Users
* @apiBody {String} refreshToken refreshToken of previous login.
* @apiError RefreshTokenNotFound This error will occur when user doesn't provide Refresh token 
* @apiErrorExample {json} RefreshTokenNotFoundError-Response:
* {
*   success: false,
*   message: 'Refresh token not found, login again'
* }
* @apiError InvalidRefreshToken This error will occur when user enter invalid refresh token 
* @apiErrorExample {json} InvalidRefreshTokenError-Response:
* {
*   success: false,
*   message: 'Invalid refresh token'
* }

* @apiSuccessExample {json} SuccessfullyUpdatedAccessTokenError-Response:
* {
*   success: true,
*   message: 'Successfully Updated AccessToken'
*   accessToken: String,
*   
* } 
 */
