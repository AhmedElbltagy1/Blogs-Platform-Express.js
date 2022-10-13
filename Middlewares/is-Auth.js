const jwt = require('jsonwebtoken');
const {checkToken} = require('../helpers/jwt');
const {ErrorHandler} = require('../utils/error');
const errors = require('../utils/errors')


module.exports = () => {
  return async (req, res, next) => {
try{
    const barearToken = req.headers.authorization;
    if(!barearToken) {
        throw new ErrorHandler(401, errors.TOKEN_NOT_AUTHENTICATED);
    }else {
      let splicedToken;
      if (barearToken.startsWith("Bearer")) {
      // Remove Bearer from string
          const spliced = barearToken.split(" ");
          splicedToken = spliced[1];
      }else {
          splicedToken = barearToken;
      }
      let decoded_token = checkToken(splicedToken);
      req.user = decoded_token

      return next();
      }
}catch (error) {
      next(error)
   }
 };
};
