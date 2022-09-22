const userService = require('./user.service');
const { comparePassword, hashPassword } = require("../../Helpers/bycrypt");
const {createToken} = require('../../Helpers/jwt');
const { user_token } = require('../../Helpers/tokens');


exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers()
    res.json
      ({
        message: 'Get users success',
        data: users
      });

  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params;
    const isExist = await userService.getUser(id)
    if (!isExist) {
      throw new Error(' user not found ');
    }
    res.json({
      message: 'Get user success',
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {

    const user_id = req.params;
    const user_info = req.body;

    const isExist = await userService.getUser(user_id)

    if (!isExist) {
      throw new Error(' user not found ');
    }
    const Updateduser = await userService.updateUser(user_info);
    res.json({
      message: 'update user success',
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user_id = req.params;
    const isExist = await userService.getUser(user_id);

    if (!isExist) {
      throw new Error('User not found');
    }
    await userService.deleteUser(user.id)

    res.json({
      message: 'User deleted Successfully',
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.signup = async (req, res) => {
  const user_info = req.body

  try {
    const isExist = await userService.getUser(user_info.email)
    if (isExist) {
      res.json({
        message: "user already exist"
      }).status(400)

    } else {
      const hashedPassword = await hashPassword(user_info.password);
      user_info.password = hashedPassword;

      const Createduser = await userService.addUser(user_info)
      res.status(201).json({
        message: 'user created',
        data: Createduser,
      });
    }
  } catch (error) {
    console.log(error);
    res.send("something wrong")
  }
}

exports.signin = async (req, res) => {

  const user_info = req.body;

  try {
    const isExist = await userService.getUser(user_info.email);

    if (!isExist) {
      throw new Error('Invalid email or password');
    }
    // ensure password is correct

    const isMatched = await comparePassword(user_info.password, isExist.password);


    if (!isMatched) {

      throw new Error('Invalid password');
    }

    const token = createToken(user_token(user_info.id, user_info.name, user_info.email))

    res.send({
      message: 'User logged in Successfully',
      data: {
        token,

      },
    });
  } catch (error) {
    {
      res.status(401).json
        ({
          error: error.message,
        });
    }
  }
};









