const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
    const html = '<h2>problema 6</h2>' +
        '<form action="/api/problema6/" method="POST">' +
        '<div>' + '<input id="numero" type="number" name="number">' + '</div>' +
        '<div>' + '<button type="submit">Enviar</button>' + '</div>' +
        '</form>';
    res.send(html);
});

app.post('/', (req, res) => {
    let limite = req.body.number;
    limite = parseInt(limite);
    let sumaCuadrados = 0;
    let sumaAlCuadrado = 0;
    let diferencia;
    for (i = 1; i <= limite; i++) {
        sumaCuadrados = sumaCuadrados + (i ** 2);
        sumaAlCuadrado = sumaAlCuadrado + i;
    }
    diferencia = (sumaAlCuadrado) ** 2 - sumaCuadrados;
    const html = '<div>' + diferencia + '</div>';
    res.send(html);
});