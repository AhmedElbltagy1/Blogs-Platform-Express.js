
const { GET_USER, GET_USERS, UPDATE_USER, DELETE_USER } = require("../../../modules/users/endPoint");
const{
     GET_POSTS,
     GET_POST,
     UPDATE_POST,
     DELETE_POST
} = require("../../../modules/Posts/endPoint")
module.exports = {
    can :[
        GET_USER,
        GET_USERS,
        UPDATE_USER,
        DELETE_USER,
        GET_POSTS,
        GET_POST,
        UPDATE_POST,
        DELETE_POST
      
    ]
}
