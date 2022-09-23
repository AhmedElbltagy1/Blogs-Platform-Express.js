const {roles} = require("../../../helpers/roles")
const adminPolicy = require("./adminPolicy")
const customerPolicy = require("./customerPolicy")



const options = {
    [roles.ADMIN] : adminPolicy,
    [roles.CUSTOMER]: customerPolicy,

}
module.exports= options