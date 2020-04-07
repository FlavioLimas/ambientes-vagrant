const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello, world! Eu estou rodando Node.Js Porra!!!');
});

app.listen(8081, function () {
    console.log('Iniciando a aplicação na porta ' + 8081);
});