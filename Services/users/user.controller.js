const userService = require('./user.service');
const { comparePassword, hashPassword } = require("../../helpers/bycrypt");
const { createToken } = require('../../helpers/jwt');
const { user_token } = require('../../helpers/tokens');
const { ErrorHandler } = require('../../utils/error');
const error = require('../../utils/errors');
const responseWith = require('../../utils/response');



exports.signup = async (req, res, next) => {
try {
    const user_info = req.body;
    // ensure that user not already exist 
    const isExist = await userService.getUser(user_info.email)
    if (isExist) {
        throw new ErrorHandler(409, error.ALREADY_EXIST)
    };
    // hash the user password
    const hashedPassword = await hashPassword(user_info.password);
    user_info.password = hashedPassword;
    // add the user
    const createdUser = await userService.addUser(user_info);
    // send the response
    return responseWith(true,201,createdUser,res)
}catch (error) {
    next(error);
  }
}

exports.signin = async (req, res, next) => {
try {
    const user_info = req.body;
    // check that the email is exist
    const isExist = await userService.getUser(user_info.email);
    if (!isExist) {
      throw new ErrorHandler(401, error.NOT_FOUND);
    }
    // ensure password is correct
    const isCorrectPassword = await comparePassword(user_info.password, isExist.password);
    if (!isCorrectPassword) {
      throw new ErrorHandler(401, error.NOT_AUTHENTICATED);
    }
    // generate a token for the user
    const token = createToken(user_token(isExist.id, isExist.name, isExist.email, isExist.role));
    
    // send the response:
    return responseWith(true, 200, {isExist, token}, res)

}catch (error) {
    next(error)
  }
};









