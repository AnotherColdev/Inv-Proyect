-- CreateTable
CREATE TABLE "Sede" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "telefono" TEXT,
    "ciudad" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL,
    "fechaModificacion" TIMESTAMP(3),

    CONSTRAINT "Sede_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empleado" (
    "cedula" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "idSede" INTEGER NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("cedula")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "costo" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "idSede" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidadStock" INTEGER NOT NULL,
    "precioVenta" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("idSede")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "fecha" TIMESTAMP(3) NOT NULL,
    "idSede" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_cedula_key" ON "Empleado"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Inventario_idProducto_key" ON "Inventario"("idProducto");

-- AddForeignKey
ALTER TABLE "Empleado" ADD CONSTRAINT "Empleado_idSede_fkey" FOREIGN KEY ("idSede") REFERENCES "Sede"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_idSede_fkey" FOREIGN KEY ("idSede") REFERENCES "Sede"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Inventario"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idSede_fkey" FOREIGN KEY ("idSede") REFERENCES "Sede"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
