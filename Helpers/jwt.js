const jwt = require('jsonwebtoken');

exports.createToken = (payload) => {
    try {
        const token = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: 500000 });
        return token;
    } catch (err) {
        throw new Error(401, err);
    }
};


exports.checkToken = (token) => {
    try {
        const checkingResult = jwt.verify(token, process.env.JWT_SECRET);
        return checkingResult;
    } catch (err) {
        throw new Error(401, err);
    }
};