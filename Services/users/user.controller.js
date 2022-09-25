const userService = require('./user.service');
const { comparePassword, hashPassword } = require("../../helpers/bycrypt");
const { createToken } = require('../../helpers/jwt');
const { user_token } = require('../../helpers/tokens');
const { ErrorHandler } = require('../../utils/error');
const error = require('../../utils/errors');

exports.getUsers = async (req, res ,next) => {
  try {
    const users = await userService.getUsers()
    res.json({message: 'Get users success', data: users});
  } catch (error) {
      next(error)
  }
};

exports.getUser = async (req, res,next) => {
  try {
    const id = req.params;
    const isExist = await userService.getUser(id)
    if (!isExist) {
      throw new ErrorHandler(401,error.NOT_FOUND)
    }
    res.json({ message: 'Get user success', data: user,});
  } catch (error) {
    next(error)
  }
};

exports.updateUser = async (req, res ,next) => {
  try {
    const user_id = req.params;
    const user_info = req.body;
    const isExist = await userService.getUser(user_id)
    if (!isExist) {
      throw new ErrorHandler(401,error.NOT_FOUND)
    }
      const Updateduser = await userService.updateUser(user_info);
      res.json({message: 'update user success',Updateduser});
  } catch (error) {
    next(error)
  }
};

exports.deleteUser = async (req, res,next) => {
  try {
    const user_id = req.params;
    const isExist = await userService.getUser(user_id);

    if (!isExist) {
      throw new ErrorHandler(401,error.NOT_FOUND)
    }
    await userService.deleteUser(user.id);
    res.json({ message: 'User deleted Successfully'});
  } catch (error) {
    next(error)
  }
};

exports.signup = async (req, res,next) => {
  const user_info = req.body
  try {
    const isExist = await userService.getUser(user_info.email)
    if (isExist) {
      throw new ErrorHandler(401, error.ALREADY_EXIST)
    } else {
      const hashedPassword = await hashPassword(user_info.password);
      user_info.password = hashedPassword;

      const Createduser = await userService.addUser(user_info);
      res.status(200).json({ message: "success", data: Createduser });
    }
  } catch (error) {
    next(error);
  }
}

exports.signin = async (req, res,next) => {
  const user_info = req.body;
  try {
    const isExist = await userService.getUser(user_info.email);
    if (!isExist) {
        throw new ErrorHandler(401, error.NOT_FOUND);
    }
    // ensure password is correct
    const isCorrectPassword = await comparePassword(user_info.password, isExist.password);
    if (!isCorrectPassword) {
        throw new ErrorHandler(401, error.NOT_AUTHENTICATED);
    }
    const token = createToken(user_token(isExist.id, isExist.name,isExist.email,isExist.role));
    res.status(200).json({ message: "success", token: token });
  } catch (error) {
    next(error);
  }
};









