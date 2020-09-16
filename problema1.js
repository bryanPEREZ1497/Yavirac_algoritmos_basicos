const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
    const html = '<h2>problema1</h2>' +
        '<form action="/api/problema1" method="POST">' +
        '<div>' + '<input id="numero" type="number" name="number">' + '</div>' +
        '<div>' + '<button type="submit">Enviar</button>' + '</div>' +
        '</form>';
    res.send(html);
});

app.post('/', (req, res) => {
    let suma = 0;
    let i = 1;
    while (i < parseInt(req.body.number)) {
        if (i % 3 == 0 || i % 5 == 0) {
            suma += i;
        }
        i++;
    }
    const html = '<div>' + suma + '</div>';
    res.send(html);
});