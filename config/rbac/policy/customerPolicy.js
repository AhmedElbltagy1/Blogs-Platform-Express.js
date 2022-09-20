const { GET_USER } = require("../../../modules/users/endPoint");
const {CREATE_POST} = require("../../../modules/Posts/endPoint")
module.exports = {
    can :[
        GET_USER,
        CREATE_POST

    ]
}
