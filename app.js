const express = require("express");
require('dotenv').config();
const RoutesSettings = require("./startup/RoutesSettings");
const app = express();
const logger = require('./config/logger');

// DataBase Connection
require("./startup/db")();


RoutesSettings(app);
app.use(require('./startup/router'));
app.use('/images', express.static('images'))

app.listen(process.env.PORT,()=>{
    logger.log('info',`server is listen on port ${process.env.PORT}`);
})