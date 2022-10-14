const AccessControl = require("accesscontrol");

const ac = new AccessControl(); 

ac.grant('user')
    .createOwn('posts') 
    .deleteOwn('posts')
    .readAny("posts")
    

    .grant('admin')
    .extend('user')
    .updateAny('posts')  
    .deleteAny('posts')
    .readAny("users",['*','!password']);
    
    

module.exports = ac ;