const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../models/prismaClient');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).send('Usuario no encontrado');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Contraseña incorrecta');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });

    res.redirect('/dashboard');  // Redirigir al dashboard después de iniciar sesión
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};

