const User = require("../model/users.model");



exports.getUsers = async (req, res) => {
  try {
    
    const users = await User.find();
    const count = await User.count();
    res.json({message: 'Get users success',data: {count,users,}});
    
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
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
    const { id } = req.params;
    const updatePayload = req.body;
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    const updatedUser = await User.findByIdAndUpdate(id, updatePayload, {
      new: true,
    });
    res.json({
      message: 'update user success',
      data: updatedUser,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    await User.deleteOne({ _id: id });
    res.json({
      message: 'User deleted Successfully',
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};








