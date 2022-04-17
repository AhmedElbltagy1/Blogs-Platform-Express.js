const User = require("../../../DataBase/Models/users.model");
const bcrypt = require("bcrypt");


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
module.exports= Register;