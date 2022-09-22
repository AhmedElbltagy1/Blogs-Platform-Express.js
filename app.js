const express = require("express");
require('dotenv').config();
const multer = require('multer');
const app = express();


app.use(express.json());

// DataBase Connection
require("./startup/db")();




app.use(require('./startup/router'));
app.use('/images', express.static('images'))

app.listen(process.env.PORT,()=>{
    console.log("server is run");
})
