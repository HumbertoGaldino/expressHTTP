const express = require('express');

const app = express();

//Aqui o console.log('Servidor Rodando') não é obrigatório, mas é criado por questão de boas práticas
app.listen(3000, ()=> {
    console.log('Servidor Rodando na porta 3000');
});

//Rota no express
app.get('/',(requisicao,resposta) =>{
    resposta.send('Ola Mundo!');
});