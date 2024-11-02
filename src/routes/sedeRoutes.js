const express = require('express');
const router = express.Router();
const sedeController = require('../controllers/sedeController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Ruta para listar sedes
router.get("/", isAuthenticated, sedeController.getSedes);

// Ruta para nueva sede
router.get('/new', isAuthenticated, sedeController.getCreateSedeForm); // Muestra el formulario de creación
router.post('/new', isAuthenticated, sedeController.createSede); // Procesa la creación de la sede

module.exports = router;