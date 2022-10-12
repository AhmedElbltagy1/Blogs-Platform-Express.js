const userModel = require('./user.model');

exports.getUser = async (email) => {
    const user = await userModel.findOne({ email : email });
    return user 
}
exports.getUsers = async() => {
    const users = await userModel.find()
    return users
}
exports.updateUser = async (payload) => {
    const user  = await userModel.updateOne(payload)
    return user 
}
exports.deleteUser = async (user_email) => {
    const user = await userModel.deleteOne({email:user_email});
    return user 
}
exports.addUser = async (User_info)=>{
    const user = await userModel.insertMany(User_info);
    return user;
}
