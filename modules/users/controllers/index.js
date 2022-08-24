const User = require("../model/users.model");
const {comparePassword,hashPassword} = require("../../../config/Helpers/bycrypt");
const multer = require('multer');
const jwt = require("jsonwebtoken");


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


exports.ProfilePicture = async (req, res) => {
    const user = await User.findById({_id:req.user.id})
    if (!user) {
        res.send("in- valid user")
    }else{
        let imageUrl = process.env.imageURl+req.file.filename ;
        const userPhoto =await User.findByIdAndUpdate({_id:req.user.id}
            ,{profilePicture:imageUrl})
        res.json({message:"image addeddd",imageUrl,userPhoto})
    }        
}

exports.register = async(req,res)=>{
    const {name,email,password,role} = req.body;
    try {
        const client =await User.findOne({email})
        if (client) {
            res.send("this email already exist")
        }else{
          var hashedpassword = await hashPassword(req.body.password);
          var user =await User.insertMany({name,email,password:hashedpassword,role})
          res.status(201).json({
            message: 'User created',
            data: user,
          }); 
        } 
    } catch (error) {
      console.log(error);
        res.send("something wrong")
    }
}

exports.login = async (req,res) => {
    const {email,password}= req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('Invalid email or password');
        }
        const isMatched = await comparePassword(password, user.password);
        if (!isMatched) {
          throw new Error('Invalid email or password');
        }
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET);
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





