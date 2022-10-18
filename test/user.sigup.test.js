const chai = require("chai");
const request = require('supertest');
const app = require("../app");
const expect = chai.expect;



describe('/users', function() {

    describe('/signup', async function () {

        it('should throw an error with 400 if there is error on user schema', async function(){
            this.timeout(20000); // to await the request
            let res = await request(app)
            .post('/users/signup')
            .send({
                    "name":"AhmedGaberElbltgay",
                    "email":"AhmedGaberElbltagyyahoo.com",
                    "password":"1234"
            })
            expect(res.statusCode).equal(400,res.body.message)  
        })

        it('should return 409 if user already exist ',async function(){
            this.timeout(20000); 
            let res = await request(app)
            .post('/users/signup')
            .send({
                    "name":"AhmedGaberElbltgay",
                    "email":"AhmedGaberElbltagy@yahoo.com",
                    "password":"1234"
            })
            expect(res.statusCode).equal(409,res.body.message)
        })
        it("Should respond with 201 if signup successfully", async function() {
            let res = await request(app)
                .post("/users/signup")
                .send({
                    "name":"abdelrahman",
                    "email": "abdelrahman@yahoo.com",
                    "password": "1234"
                });
                expect(res.statusCode).to.equal(201,res.body.message);
                expect(res.body.data).have.property("name").eq("abdelrahman");
                expect(res.body.data).have.property("email").eq("abdelrahman@yahoo.com");
        });
    })
})