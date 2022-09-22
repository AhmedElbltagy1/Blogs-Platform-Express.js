const {roles} = require("../../../Helpers/roles")
const adminPolicy = require("./adminPolicy")
const customerPolicy = require("./customerPolicy")



const options = {
    [roles.ADMIN] : adminPolicy,
    [roles.CUSTOMER]: customerPolicy,

}
module.exports= options