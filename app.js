const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

const indexRouter = require('./routers');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});