const express = require('express');
const verif_token = require('../lib/verif_token');

const router = express.Router()
const controller = require('../controllers/professor')

router.post('/', verif_token ,controller.create);

router.get('/', verif_token ,controller.retrieve);

router.get('/:id', verif_token ,controller.retriveOne);

router.patch('/:id', verif_token ,controller.update)

router.delete('/:id', verif_token ,controller.delete)

module.exports = router