
const { GET_USER, GET_USERS } = require("../../../modules/users/endPoint");
const {GET_POSTS,GET_POST} = require("../../../modules/Posts/endPoint")
module.exports = {
    can :[
        GET_USER,
        GET_POSTS,
        GET_POST
        
    ]
}
