const jwt = require('jsonwebtoken');
const rbac = require('../config/rbac/index');
const {checkToken} = require('../helpers/jwt');
const {ErrorHandler} = require('../utils/error');
const errors = require('../utils/errors')


module.exports = (endPoint) => {
  return async (req, res, next) => {
    try {
      const Bareartoken = req.headers.authorization;
      if (!Bareartoken) {
        throw new ErrorHandler(401, errors.TOKEN_NOT_AUTHENTICATED);
    } else {
      let splicedToken;
      if (Bareartoken.startsWith("Bearer ")) {
      // Remove Bearer from string
          const spliced = Bareartoken.split(" ");
          splicedToken = spliced[1];
      }else {
          splicedToken = Bareartoken;
      }
      let decoded_token = checkToken(splicedToken);
      req.user=decoded_token
      // console.log(req.user.payload.user_role);
      const isAllowed = await rbac.can(req.user.payload.user_role, endPoint);
      if (isAllowed) {
        return next();
      }else{
        throw new ErrorHandler(401,errors.NOT_AUTHORIZED)
      }
      }
    } catch (error) {
      next(error)
   }
 };
};