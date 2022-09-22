const jwt = require('jsonwebtoken');
const rbac = require('../config/rbac/index');

module.exports = (endPoint) => {

  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const user = jwt.verify(token, process.env.JWT_SECRET);
      if (!user) {
        throw new Error('you are not Authorized');
      }
      req.user = user
      const isAllowed = await rbac.can(req.user.role.toString(), endPoint);
      if (!isAllowed) {
        return res.status(403).json({
          message: 'You are not allowed to call this endpoint',
        });
      }
      next();
    } catch (error) {
      return res.status(401).json
        ({
          message: 'you must login first ', error
        });
    }
  };
};
