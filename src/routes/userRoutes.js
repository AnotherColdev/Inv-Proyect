const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Ruta para listar usuarios
router.get('/', isAuthenticated, userController.getUsers);

// Ruta para crear un nuevo usuario
router.get('/new', isAuthenticated, userController.getCreateUserForm);  // Muestra el formulario de creación
router.post('/new', isAuthenticated, userController.createUser);        // Procesa la creación del usuario

// Ruta para editar un usuario existente
router.get('/edit/:id', isAuthenticated, userController.getEditUserForm);  // Muestra el formulario de edición
router.post('/edit/:id', isAuthenticated, userController.editUser);        // Procesa la edición del usuario

// Ruta para eliminar un usuario
router.post('/delete/:id', isAuthenticated, userController.deleteUser);

module.exports = router;

