const express = require('express');
const app = express();

const archivoDB = require('./DB/conexion');

app.get('/', (req, res) => {
    res.end("Bienvenido al servidor de NODE.JS. Corriendo...");
})

app.listen(3000, function () {
    console.log("Server escuchando");
})