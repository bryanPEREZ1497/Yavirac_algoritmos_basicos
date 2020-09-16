const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
    const html = '<h2>problema 10</h2>' +
        '<form action="/api/problema10/" method="POST">' +
        '<div>' + '<input id="numero" type="number" name="number">' + '</div>' +
        '<div>' + '<button type="submit">Enviar</button>' + '</div>' +
        '</form>';
    res.send(html);
});

app.post('/', (req, res) => {
    let divisor = 0;
    let contadorSerie = 2;
    let sumaPrimos = 0;
    let numerosPrimos = [];
    let limite = req.body.number;
    limite = parseInt(limite);
    while (contadorSerie <= limite) {
        for (let i = 1; i <= contadorSerie; i++) {
            if (contadorSerie % i == 0) {
                divisor++;
            }
        }
        if (divisor === 2) {
            sumaPrimos += contadorSerie;
            divisor = 0;
            numerosPrimos.push(contadorSerie);
            contadorSerie++;
        }
        else {
            contadorSerie++;
            divisor = 0;
        }
    }
    const html = '<div>' + sumaPrimos + '</div>';
    res.send(html);
});