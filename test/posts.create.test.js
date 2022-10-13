const chai = require("chai");
const request = require('supertest');
const app = require("../app");
const expect = chai.expect;


describe('/posts', function(){
    describe('/create',async function(){
        it('should throw error with 401 if there is error on schema',async function () {
            this.timeout(20000);
            let res = await request(app)
            .post("/posts/create")
            .send({
                "title":"ahmedpost",
                "description":55555
            })
            expect(res.statusCode).equal(401,res.body.message)

        })
        it('should throw error with 400 if user not login(token not attached)',async function(){
            this.timeout(20000);
            let res = request(app)
            .post("/posts/create")
            .send({
                "title":"ahmedpost",
                "description":"ahmedpost"
            })
            expect(res.statusCode).equal(400,res.body)
        })
    })
})