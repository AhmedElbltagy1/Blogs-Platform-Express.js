const jwt = require('jsonwebtoken');
const rbac = require('../config/rbac/index');

module.exports = (endPoint) => {
  return async (req, res, next) => {
    try {
      const Bareartoken = req.headers.authorization;
      // let token = Bareartoken.split("")[1];
      // const decodedtoken = jwt.verify(token,process.env.JWT_SECRET);

      // if (!user) {
      //   throw new Error('you are not Authorized');
      // }
      req.user = Bareartoken;
      console.log(req.user.role);
      const isAllowed = await rbac.can(req.user.role, endPoint);
      
      if (!isAllowed) {
        return res.status(403).json({
          message: 'You are not allowed to call this endpoint',
        });
      }else{
        next();
      }
      
    } catch (error) {
      return res.status(401).json
        ({
          message: 'you must login first ', error
        });
    }
  };
};