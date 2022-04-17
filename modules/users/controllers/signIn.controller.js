const User = require("../../../DataBase/Models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



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
module.exports = signIn;