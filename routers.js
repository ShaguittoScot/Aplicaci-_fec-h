const express = require('express');
const router = express.Router();
const { saludo, mensaje } = require('./middleware');

router.get("/", saludo,mensaje, (req, res) => {
    res.send("hola estas en la laiz")
})


router.get("/home", mensaje, saludo, (req, res) => {

    res.send("hola estas en home")
})

module.exports = router;