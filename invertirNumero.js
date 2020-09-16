const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
    const html = '<h2>Invierte el número</h2>' +
        '<form action="/api/invertir-numero" method="POST">' +
        '<div>' + '<label for="">'+'Escribir un numero para que el programa lo invierta'+'</label>'+'<input id="numero" type="number" name="number">' + '</div>' +
        '<div>' + '<button type="submit">Enviar</button>' + '</div>' +
        '</form>';
    res.send(html);
});

app.post('/', (req, res) => {
    let numero = req.body.number;
	numero = parseInt(numero);
    let numeroInvertido = [];
    let response = '';
    while (numero >= 10) {
        numeroInvertido.push(numero % 10);
        numero = parseInt(numero / 10);
    }
    numeroInvertido.push(numero);
    for (i = 0; i <= numeroInvertido.length - 1; i++) {
        response = response + numeroInvertido[i].toString();
    }
    respuesta = parseInt(response);
    const html = '<div>'+respuesta+'</div>';
    res.send(html);
});

