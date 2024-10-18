const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Ruta para listar productos
router.get('/', isAuthenticated, productController.getProducts);

// Ruta para crear un nuevo producto
router.get('/new', isAuthenticated, productController.getCreateProductForm);  // Muestra el formulario de creación
router.post('/new', isAuthenticated, productController.createProduct);        // Procesa la creación del producto

// Ruta para editar un producto existente
router.get('/edit/:id', isAuthenticated, productController.getEditProductForm);  // Muestra el formulario de edición
router.post('/edit/:id', isAuthenticated, productController.editProduct);        // Procesa la edición del producto

// Ruta para eliminar un producto
router.post('/delete/:id', isAuthenticated, productController.deleteProduct);

module.exports = router;

