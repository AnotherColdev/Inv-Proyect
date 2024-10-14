-- CreateTable
CREATE TABLE "Sede" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "fechaCreacion" DATETIME NOT NULL,
    "fechaModificacion" DATETIME
);

-- CreateTable
CREATE TABLE "Empleado" (
    "cedula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "idSede" INTEGER NOT NULL,
    CONSTRAINT "Empleado_idSede_fkey" FOREIGN KEY ("idSede") REFERENCES "Sede" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "costo" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Inventario" (
    "idSede" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idProducto" INTEGER NOT NULL,
    "cantidadStock" INTEGER NOT NULL,
    "precioVenta" REAL NOT NULL,
    CONSTRAINT "Inventario_idSede_fkey" FOREIGN KEY ("idSede") REFERENCES "Sede" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inventario_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idProducto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "fecha" DATETIME NOT NULL,
    "idSede" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL,
    CONSTRAINT "Pedido_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Inventario" ("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_idSede_fkey" FOREIGN KEY ("idSede") REFERENCES "Sede" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_cedula_key" ON "Empleado"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Inventario_idProducto_key" ON "Inventario"("idProducto");
