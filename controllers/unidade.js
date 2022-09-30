const unidade = require('../models/unidade')

const controller = {}       // Objeto vazio

/*
    Métodos do controller:
    create: cria um novo registro
    retrieve: lista todos os registros
    retriveOne: lista apenas um registro
    update: atualiza o registro
    delete: exclui o registro
*/

controller.create = async(req, res) => {
    try {
        await unidade.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieve = async (req, res) => {
    try {
        const result = await unidade.findAll()
        // HTTP 200: OK (implícito)
        res.send(result)
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveOne = async (req, res) => {
    try {
        const result = await unidade.findByPk(req.params.id)
        // HTTP 200: OK
        if (result) {
            res.send(result)
        } else {
            res.status(404).end
        }
    }
    catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
}

controller.update = async(req, res) => {
    try {
        const response = await unidade.update(
            req.body,
            { where: { id: req.params.id }} 
        )

        console.log("======", {response})

        if(response[0] > 0) { // Encontrou e atualizou
            // HTTP 204: No content
            res.status(204).end()
        } else { // Não encontrou (e não atualizou)
            res.status(404).end()
        }
    }
    catch(error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.delete = async (req, res) => {
    try {
        const response = await unidade.destroy(
            { where: { id: req.params.id }} 
        )

        // console.log("======", {response})

        if(response) { // Encontrou e atualizou
            // HTTP 204: No content
            res.status(204).end()
        } else { // Não encontrou (e não atualizou)
            res.status(404).end()
        }
    }
    catch(error) {
        console.error(error)
        res.status(500).send(error)
    }
}

module.exports = controller