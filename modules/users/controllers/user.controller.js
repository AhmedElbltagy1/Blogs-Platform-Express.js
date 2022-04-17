const User = require("../../../DataBase/Models/users.model");
const bcrypt = require("bcrypt");


const Allusers = async (req, res) => {
    let data = [];
    if (req.user.role =="admin") {
     data = await User.find({}); 
    }else{
        data = await User.findOne({email:req.user.email})
    }
    res.json({ message: "success", data })
}


const updateuser = async (req, res) => {
    const {id} = req.params;
    const userRole = await User.findById({_id:req.user.id})
    if (userRole.role =="admin") {
       const updateduser = await userModel.updateOne({ _id: id })
        res.json({message:"updated",updateduser})
    }else{
        res.send("your not allowed")
    }
    
}
const deleteuser = async (req, res) => {
    const { id } = req.params;
    await userModel.deleteOne({ _id: id })
    res.send("deleted");
}



module.exports = { Allusers, updateuser, deleteuser}


