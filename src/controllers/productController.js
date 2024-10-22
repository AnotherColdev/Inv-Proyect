const prisma = require('../models/prismaClient');

// Obtener la lista de productos
exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.render('products', { products, title: 'Productos', showNavbar: true, });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener productos');
  }
};

// Mostrar el formulario para crear un nuevo producto
exports.getCreateProductForm = (req, res) => {
  res.render('productForm', { title: 'Crear Producto', showNavbar: true, });
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  
  try {
    await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        stock: parseInt(stock),
      }
    });
    res.redirect('/products');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear producto');
  }
};

// Mostrar el formulario para editar un producto existente
exports.getEditProductForm = async (req, res) => {
  const { id } = req.params;
  
  try {
    const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
    res.render('productForm', { product, title: 'Editar Producto', showNavbar: true, });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el producto');
  }
};

// Actualizar un producto existente
exports.editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  try {
    await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name,
        price: parseFloat(price),
        stock: parseInt(stock)
      }
    });
    res.redirect('/products');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar producto');
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.product.delete({
      where: { id: parseInt(id) }
    });
    res.redirect('/products');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar producto');
  }
};

  