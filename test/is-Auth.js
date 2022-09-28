const usersController = require('../Services/users/user.controller')
const expect = require('chai').expect;
const User = require('../Services/users/user.model')


describe('Users Controller - Login', function() {
    it('should throw an error with code 500 if accessing the database fails', function(done) {
        sinon.stub(User, 'findOne');
        User.findOne.throws();
    
        const req = {
          body: {
            email: 'test@test.com',
            password: 'tester'
          }
        };
    
        AuthController.login(req, {}, () => {}).then(result => {
          expect(result).to.be.an('error');
          expect(result).to.have.property('statusCode', 500);
          done();
        });
    
        User.findOne.restore();
      });
    });
    
