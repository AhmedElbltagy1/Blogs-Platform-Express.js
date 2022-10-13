// const chai = require("chai");
// const request = require('supertest');
// const app = require("../app");
// const expect = chai.expect;
// const {deleteUser} = require('../Services/users/user.service')

// describe("/users", () => {
//     describe("/signin", async () => {
//         it("Should respond with 400 if there's an error on schema", async function () {
//             this.timeout(20000)
//                 let res = await request(app)
//                 .post("/users/signin")
//                 .send({
//                     "email": "ahmed22kjsdnkjdsbfyahoo.com",
//                     "password":"1234"
//                 })
//             expect(res.statusCode).equal(400,res.body.message);  
//         })

//         it("should respond with 401 if user not authenticated ",async function(){
//             this.timeout(20000)
//             let res = await request(app)
//                 .post("/users/signin")
//                 .send({
//                     "email": "AhmedGaberElbltagy",
//                     "password": "123"
//                 })
//                 expect(res.statusCode).equal(401,res.body.message);

//         })
        
//         it("Should respond with 200 if login successfully", async function (){
//             this.timeout(20000)
//             let res = await request(app)
//                 .post("/users/signup")
//                 .send({
//                     "name":"AhmedGaberElbltagy",
//                     "email": "AhmedGaberElbltagy@yahoo.com",
//                     "password":"1234"
//                 })
//             expect(res.statusCode).equal(201,res.body.message);

//             res = await request(app).post("/users/signin").send({
//                 "email":"AhmedGaberElbltagy@yahoo.com",
//                 "password":"1234"
//             })
//             expect(res.statusCode).equal(200,res.body.message);
//             expect(res.body.data.isExist).have.property("name").equal("AhmedGaberElbltagy");
//             expect(res.body.data.isExist).have.property("email").equal("AhmedGaberElbltagy@yahoo.com");
//             expect(res.body.data).have.property("token");
            
//         })
//     })
// });