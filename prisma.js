import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

    const newSede = await prisma.sede.create({
        data: {
            nombre: "Sede 1",
            ciudad: "sadwda",
            fechaCreacion: new Date("2021-03-25")
        }
    })

    const newUser = await prisma.empleado.create({
        data: {
            cedula: 1006124512,
            celular: "31356546541",
            contrasena: "1234",
            nombre: "Pepito",
            rol: "Administrador",
            idSede: 1
        }
    })
    console.log(newUser);
}

main()