const AccessControl = require("accesscontrol");

const ac = new AccessControl(); 

ac.grant('user')
    .createOwn('posts') 
    .deleteOwn('posts')
    .readAny('posts')

    .grant('admin')
    .extend('user')
    .updateAny('posts')  // explicitly defined attributes
    .deleteAny('posts')
    

module.exports = ac ;