const prisma = require('../models/prismaClient');

//Obtener la lista de sedes
exports.getSedes = async (req, res) => {
    try {
      const sedes = await prisma.sede.findMany();
      res.render('sedes', { sedes, title: 'sedes', showNavbar: true, });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener las sedes');
    }
  };

// Mostrar el formulario para crear nuevas sedes
exports.getCreateSedeForm = (req, res) => {
    res.render('sedeForm', {title: 'Crear Sede', showNavbar: true, })
};

//Crear nueva sede
exports.createSede = async (req, res) => {
    const {nameSede, addressSede} = req.body;

    try {
        await prisma.sede.create({
            data: {
                name: nameSede,
                address: addressSede
            }
        });
        res.redirect('/sedes');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la sede');
    }
};

// Mostrar el formulario para editar una sede
exports.getEditSedeForm = async (req, res) => {
    const { id } = req.params;

    try {
        const sede = await prisma.sede.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.render(sedeForm, {sede, title: 'editar Sede', showNavbar: true, });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar la sede');
    }
};

// Actualizar sede
exports.editSede = async (req, res) => {
    const { id } = req.params;
    const { name, address, telephone, city} = req.body;

    try {
        await prisma.sede.update({
            where: {
                id: parseInt(id)
            }, 
            data: {
                name,
                address,
                telephone,
                city
            }
        });
        res.redirect('/sedes');
    } catch (error) {
        console.error(error);
        es.status(500).send('Error al actualizar producto');
    }
};

// Eliminar una sede
exports.deleteSede = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.sede.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.redirect('/sedes');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar producto');
    }
};