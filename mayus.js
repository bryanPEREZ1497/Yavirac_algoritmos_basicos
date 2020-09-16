const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
    const html = '<h2>Mayusculas</h2>' +
        '<form action="/api/mayuscula" method="POST">' +
        '<div>' + '<label for="">'+'Escriba una palabra para que el programa evalue el uso de mayusculas'+'</label>'+'<input id="numero" type="" name="cadena">' + '</div>' +
        '<div>' + '<button type="submit">Enviar</button>' + '</div>' +
        '</form>';
    res.send(html);
});

app.post('/', (req, res) => {
    let cadena = req.body.cadena;
    let cadena1 = cadena.toLowerCase().slice(1);
    let cadena2 = cadena[0].toUpperCase();
    let cadena3 = cadena2 + cadena1;
    let cadena4 = cadena.toUpperCase();
    let cadena5 = cadena.toLowerCase();
    const html = '<div>' + 'true' + '</div>';
    switch (cadena) {
        case cadena4:            
            res.send(html);            
            break;
        case cadena5:            
            res.send(html);            
            break;
        case cadena3:            
            res.send(html);            
            break;
        default:
            res.send('<div>' + 'false' + '</div>');                        
    }    
});