const expect = require('chai').expect;
const sinon = require('sinon');


const User = require('../Services/users/user.model');
const userControllers = require('../Services/users/user.controller');


describe('usersController-signin',function(){
    it('should throw an error if accessing DB failed',function(){
        sinon.stub(User,'findOne');
        User.findOne.throws();





        User.findOne.restore();
    })

})