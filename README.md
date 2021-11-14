# expressHTTP
Exercício de criação de um servidor HTTP utilizando Express aplicado no curso Web Fullstack da Digital House.
Uma das funcionalidades que o Express possui é a de colocar no ar um servidor web/HTTP de maneira simples e rápida.

<ol>
    <li>Importar o módulo do Express e guardar a função que é retornada</li><br>
    <p style="color:purple">const express = require('express);</p><br>
    <li>Executar a função e guardar o objeto de retono na constante app. É através dela que temos acesso a todas as propriedades e métodos que existem no Express.</li><br>
    <p style="color:purple">const app = express()</p><br>
    <li>Subimos o servido através do método listen(), recebendo a porta e, opcionalmente, um callbak que será executada se o servidor terminar de iniciar</li><br>
    <p style="color:purple">app.liste(3000, ()=> console.log('Servidor executando'))</p><br>
    <li>Definir as rotas para começar o tratamento de respostas da aplicação</li><br>
    <p style="color:purple">app.get('/', (requisicao, resposta) => {
        resposta.send('Ola mundo!');
    });</p><br><br>
    <p>O método acima recebe dois parâmetros. Sendo o primeiro uma String, responsável por definir a URL da rota.<br>
    O segundo um callback com dois parâmetros: request(requisicao) e response(resposta)<br>
    <mark>resquisicao</mark>- irá armazenar todas as propriedades de métodos do pedido que chegou<br>
    <mark>resposta</mark> - irá armazenar todas as propriedades e métodos da resposta que será enviada, de acordo com nossa configuração.<br><br>
    O nome dos parâmetros do callback podem ser o que quisermos.<br>
    É comum <mark>req</mark> para request e <mark>res</mark> para response</p>
</ol>


