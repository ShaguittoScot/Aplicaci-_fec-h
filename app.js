const express = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const { saludo, mensaje } = require('./middleware');

app.get("/", saludo, (req, res) => {
    res.send("hola estas en la laiz")
})
app.get("/home", mensaje, (req, res) => {
    res.send("hola estas en home" + saludo)
})

app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});