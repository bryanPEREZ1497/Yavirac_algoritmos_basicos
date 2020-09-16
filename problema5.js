const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
    const html = '<h2>problema 5</h2>' +
        '<form action="/api/problema5/" method="POST">' +
        '<div>' + '<input id="numero" type="number" name="number">' + '</div>' +
        '<div>' + '<button type="submit">Enviar</button>' + '</div>' +
        '</form>';
    res.send(html);
});

app.post('/', (req, res) => {
    let natural = 1;
    let conteoDivisibilidad = 0;
    let divisible = req.body.number;
    divisible = parseInt(divisible);
    while (conteoDivisibilidad < divisible) {
        for (let divisor = 1; divisor <= divisible; divisor++) {
            if (natural % divisor === 0) {
                conteoDivisibilidad++;
            }
            else {
                divisor = 10;
            }
        }
        if (conteoDivisibilidad != divisible) {
            natural++;
            conteoDivisibilidad = 0;
        }
    }
    const html = '<div>' + natural + '</div>';
    res.send(html);
});