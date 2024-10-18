const prisma = require('../models/prismaClient');
const bcrypt = require('bcryptjs');

// Obtener la lista de usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.render('users', { users, title: 'Usuarios' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener usuarios');
  }
};

// Mostrar el formulario para crear un nuevo usuario
exports.getCreateUserForm = (req, res) => {
  res.render('userForm', { title: 'Crear Usuario' });
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role
      }
    });
    res.redirect('/users');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear usuario');
  }
};

// Mostrar el formulario para editar un usuario existente
exports.getEditUserForm = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    res.render('userForm', { user, title: 'Editar Usuario' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el usuario');
  }
};

// Actualizar un usuario existente
exports.editUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        email,
        role
      }
    });
    res.redirect('/users');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar usuario');
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id) }
    });
    res.redirect('/users');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar usuario');
  }
};

  