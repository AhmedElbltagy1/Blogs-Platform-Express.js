const mongoose = require("mongoose");

const connection = async () => {
    return await mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
        console.log("mongo runs");
    })
}
module.exports = connection;
 