const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res) => {
    const html = '<h2>Letras comunes</h2>' +
        '<form action="/api/letra-comun" method="POST">' +
        '<div>' + '<input id="numero" type="" name="arr">' + '</div>' +
        '<div>' + '<button type="submit">Enviar</button>' + '</div>' +
        '</form>';
    res.send(html);
});

app.post('/', (req, res) => {
    let arr = req.body.arr;
    let contadorElementos = 0;
    let comun = arr[0];
    let j = 0;
    let apoyo = comun;    
    while (apoyo != "") {
        for (i = 0; i <= arr.length - 1; i++) {
            if (arr[i].includes(apoyo)) {
                contadorElementos++;
            }
            else {
                contadorElementos = 0;
                i = arr.lenght;
            }
        }
        if (contadorElementos === arr.length) {
            const html = '<div>' + apoyo + '</div>';       
            res.send(html);
        }
        else {
            j++;
            apoyo = comun.slice(0, -j);
        }
    }
    res.send('no hay letras comunes');   
});

