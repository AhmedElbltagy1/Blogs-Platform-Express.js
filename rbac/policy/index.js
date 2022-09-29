const {roles} = require("../../helpers/roles");
const adminPolicy = require('./adminPolicy')
const clientPolicy = require('./clientPolicy')



const options = {
    [roles.ADMIN] : adminPolicy,
    [roles.CLIENT]: clientPolicy,

}
module.exports= options