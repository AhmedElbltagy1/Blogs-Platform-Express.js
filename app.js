const express = require("express");
require('dotenv').config();
const RoutesSettings = require("./startup/RoutesSettings");
const app = express();
const logger = require('./config/logger');
const Port = process.env.PORT || 3000;

// DataBase Connection
require("./startup/db")();


RoutesSettings(app);
app.use(require('./startup/router'));
app.use('/images', express.static('images'))

// app.listen(Port)

