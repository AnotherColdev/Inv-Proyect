const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Ruta para el dashboard (protegida por el middleware de autenticación)
router.get('/dashboard', isAuthenticated, dashboardController.getDashboard);

module.exports = router;
