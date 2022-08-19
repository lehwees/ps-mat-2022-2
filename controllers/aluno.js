const aluno = require('../models/aluno')

const controller = {}       // Objeto vazio

/*
    Métodos do controller: 
    Create: Cria um novo registro
    Retrieve: Lista todos os registros
    RetrieveOne: Lista apenas um registro
    Update: Atualiza o registro
    Delete: Exclui o registro
*/

controller.retrieve = async (req, res) => {
    try{
        const result = await Aluno.fildAll();
        // HTTP 200: OK (implicito)
        res.send(result);
    }
    catch(error){
        console.error(error);
        // HTTP 500: Internal Server Error
        res.status(500).send(error);
    }
}

module.exports = controller

