import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    prisma.empleados.create({
        data: {
            cedula: 123456789,
            name: "Diego",
            celular: "3121231223",
            
        }
    })
}

