const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
    const html = '<h2>problema 7</h2>' +
        '<form action="/api/problema7/" method="POST">' +
        '<div>' + '<input id="numero" type="number" name="number">' + '</div>' +
        '<div>' + '<button type="submit">Enviar</button>' + '</div>' +
        '</form>';
    res.send(html);
});

app.post('/', (req, res) => {
    let posicionPrimo = req.body.number;
    posicionPrimo = parseInt(posicionPrimo);
    let contadorDivisiblidad = 0;
    let natural = 2;
    let primos = [];
    while (primos[posicionPrimo - 1] == undefined) {
        for (let divisor = 1; divisor <= natural; divisor++) {
            if (natural % divisor == 0) {
                contadorDivisiblidad++;
            }
            if (contadorDivisiblidad > 2) {
                divisor = natural;
            }
        }
        if (contadorDivisiblidad === 2) {
            primos.push(natural);
            contadorDivisiblidad = 0;
            natural++;
        }
        else {
            contadorDivisiblidad = 0;
            natural++;
        }
    }
    let respuesta = primos[posicionPrimo - 1];
    const html = '<div>' + respuesta + '</div>';
    res.send(html);
});