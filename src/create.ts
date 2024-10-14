import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const newSede = await prisma.sede.create({
        data: {
            id: 0,
            nombre: "Mi primera borrachera - restrepo",
            direccion: "Dirección de prueba",
            telefono: "+57 13102154984",
            ciudad: "Bogotá",
            fechaCreacion: '13/10/2016'
        }
    })
    console.log(newSede)
}