import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

    // const newSede = await prisma.sede.create({
    //     data: {
    //         nombre: "Sede 1",
    //         ciudad: "sadwda",
    //         fechaCreacion: new Date("2021-03-25")
    //     }
    // })

    const newUser = await prisma.empleado.create({
        data: {
            cedula: window.cedula_usuario_nuevo,
            celular: "3135654d541",
            contrasena: contrasena_usuario_nuevo,
            nombre: nombre_usuario_nuevo,
            rol: "Administrador",
            idSede: 1
        }
    })
    console.log(newUser);
}

main()