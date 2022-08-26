
const { GET_USER, GET_USERS, UPDATE_USER, DELETE_USER } = require("../../../modules/users/endPoint");
const{

     UPDATE_POST,
     DELETE_POST,
     CREATE_POST
} = require("../../../modules/Posts/endPoint")
module.exports = {
    can :[
        GET_USER,
        GET_USERS,
        UPDATE_USER,
        DELETE_USER,
        UPDATE_POST,
        DELETE_POST,
        CREATE_POST
      
    ]
}
