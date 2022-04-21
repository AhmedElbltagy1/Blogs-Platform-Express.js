const User = require("../../../DataBase/Models/users.model");
const bcrypt = require("bcrypt");
const multer = require('multer');
const jwt = require("jsonwebtoken");


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
const Register =async(req,res)=>{
    const {name,email,password,role}= req.body;
    try {
        const user =await User.findOne({email})
        if (user) {
            res.send("this email already exist")
        }else{
            bcrypt.hash(password, 5, async function (err, hash) {
                await User.insertMany({ name, email, password: hash,role })
                
                res.send("Register successfully")
            })
        }
        
    } catch (error) {
        res.send("something wrong")
    }
}





const signIn =async (req,res)=>{
    const {email,password,role}= req.body;
    try {
        let userValid= await User.findOne({email})
        if (!userValid) {
            res.send("no email exist")
        }
        else{
            const match = await bcrypt.compare(password,userValid.password);
            if (match == true ) {
                var token = jwt.sign({ role:userValid.role,email:userValid.email,id:userValid.id }, 'shhhhh');
                
                res.json({Message:"login successful",token})
            }else{
                res.send("wrong password")
            }
        }
    } catch (error) {
        res.json({Message:"error",error})
        console.log(error);
    }
}


module.exports = { Allusers, updateuser, deleteuser,ProfilePicture,Register,signIn}


