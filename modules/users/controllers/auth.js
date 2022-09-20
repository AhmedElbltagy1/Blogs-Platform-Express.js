
const User = require("../model/users.model");
const {comparePassword,hashPassword} = require("../../../config/Helpers/bycrypt");
const jwt = require("jsonwebtoken");


exports.register = async(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    try {
        const client = await User.findOne({email:email})
        if (client) {
            res.json ({
              message:"user already exist"
            }).status(400)
        }else {
          var hashedpassword = await hashPassword(password);
          var user = await User.insertMany({name,email,password:hashedpassword,role})
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
    const email = req.body.email;
    const password = req.body.password;
    
    try {
        const user = await User.findOne({ email : email });

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
