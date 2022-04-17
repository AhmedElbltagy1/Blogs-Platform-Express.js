const multer = require('multer');
const User = require("../../../DataBase/Models/users.model");
const bcrypt = require("bcrypt");


const ProfilePicture = async (req, res) => {
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

module.exports = ProfilePicture ;