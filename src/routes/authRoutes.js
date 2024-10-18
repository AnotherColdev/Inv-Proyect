const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el login
router.get('/', (req, res) => {
  res.render('login');  // Renderiza la vista del login al visitar "/"
});

router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;

