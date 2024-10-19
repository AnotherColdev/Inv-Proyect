import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/crear-usuario', async (req, res) => {
    const { nombre, cedula, contrasena } = req.body;
    const nuevoUsuario = await prisma.usuario.create({
        data: {
            nombre,
            cedula,
            contrasena
        }
    });
    res.json(nuevoUsuario);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
