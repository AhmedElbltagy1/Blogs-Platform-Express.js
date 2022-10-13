// essiential require
const express = require("express");
const fs = require('fs');
const path = require('path')
require('dotenv').config();
const app = express();

// application require
const RoutesSettings = require("./startup/RoutesSettings");
const Port = process.env.PORT || 3000;
const helmet = require('helmet');
const morgan = require('morgan');

// database connection
require("./startup/db")();


// setting up secure response Headers using helmet .
app.use(helmet());

// setting up request logging .
const accessLogsStream = fs.createWriteStream(
    path.join(__dirname,'access.log'),
    {flags:'a'}
);
app.use(morgan('combined',{stream:accessLogsStream}))

// routes settings
RoutesSettings(app);
app.use(require('./startup/router'));
app.use('/images', express.static('images'));

app.listen(Port,()=>{
    console.log(`server is listen on port ${Port}`);
})
module.exports =app ;