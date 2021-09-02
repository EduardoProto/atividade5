const express = require('express')
const app = express()
const cotacao = require('./routers/cotacaoRouter')
const alunos = require('./routers/alunosRouter')



app.get('/alunos/todos', alunos.alunos)
app.get('/moeda/:valor_real', cotacao.cotacao)
app.get('/', (req, res) => {
    res.send("<p>Carregue alguma rota</p>")
})

const porta = 3000
app.listen(porta, () => {
    console.log('Servidor Rodando na porta ' + porta)
})