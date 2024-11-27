const router = require('express').Router();
const livroController = require('../controller/LivroController')

// router.post('/user/:userId/register', auth.assertAuthenticated, taskController.register)
router.get('', livroController.list)
router.post('', livroController.create)
router.delete('/:livroId', livroController.delete)
module.exports = router