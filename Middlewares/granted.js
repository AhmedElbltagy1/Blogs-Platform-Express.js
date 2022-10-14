const roles = require("../startup/accesscontrol");
const { ErrorHandler } = require("../utils/error");
const errors = require("../utils/errors");

module.exports = (action,resource)=>{
    return (req,res,next)=>{
        try {
            let role = req.user.user_role;
            const isGranted = roles.can(role)[action](resource).granted;
            if (isGranted){
                next();
            }else {
                throw new ErrorHandler(403,"not authorized");
            }
        }catch(err){
            next(err)
        };
    }

}
