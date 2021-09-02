const fetch = require('cross-fetch')

function cotacao(req, res) {
    let url = 'https://economia.awesomeapi.com.br/last/' + req.params.valor_real


    fetch(url).then(function(response) {
        response.json().then(function(data) {
            res.json(data);
        })
    })
}

module.exports = { cotacao }