const express = require('express')
const router = express.Router()
const controller = require('../controllers/turma')

router.post('/', controller.create)
router.get('/', controller.retrieve)
// :id é uma parte variável da URI 
router.get('/:id', controller.retrieveOne)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router