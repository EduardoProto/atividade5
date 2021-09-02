function alunos(req, res) {
    let alunos = [{
            "nome": "Joaquina",
            "matricula": "12345",
            "notas": [
                { "matemática": "10" },
                { "português": "9" }
            ]
        },
        {
            "nome": "Juanita",
            "matricula": "54321",
            "notas": [
                { "matemática": "9" },
                { "português": "9.9" }
            ]
        },
        {
            "nome": "fidelix",
            "matricula": "12534",
            "notas": [
                { "matemática": "10" },
                { "português": "10" }
            ]
        }
    ]

    res.json(alunos)
}

module.exports = { alunos }