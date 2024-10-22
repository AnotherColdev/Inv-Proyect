const prisma = require('../models/prismaClient');

exports.getDashboard = async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    const productCount = await prisma.product.count();
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });

    res.render('dashboard', { user, userCount, productCount, title: 'Dashboard', showNavbar: true });  
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};

