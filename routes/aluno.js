const express = require('express');
const router = express.Router();
const controller =  require('../controllers/aluno');
const verifToken = require('../lib/verif_token')

router.post('/', controller.create);
router.get('/', verifToken, controller.retrieve);
// :id é uma parte váriavel da URI que será interpretada
// como um parâmetro chamado id
router.get('/:id', controller.retrieveOne);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete)

module.exports = router