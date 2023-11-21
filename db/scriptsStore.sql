-- Active: 1698800313467@@roundhouse.proxy.rlwy.net@20932@railway
-- Crear la base de datos TiendaRopa
CREATE DATABASE TiendaRopa;

-- Seleccionar la base de datos recién creada
USE TiendaRopa;

-- Crear la tabla Clientes
CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Email VARCHAR(100),
    Telefono VARCHAR(15),
    Direccion VARCHAR(255),
    Ciudad VARCHAR(50),
    Provincia VARCHAR(50),
    CodigoPostal VARCHAR(10),
    FechaRegistro DATE
);

-- Crear la tabla Productos
CREATE TABLE Productos (
    ProductoID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Descripcion TEXT,
    Marca VARCHAR(50),
    Categoria VARCHAR(50),
    Precio DECIMAL(10, 2),
    Stock INT,
    FechaIngreso DATE
);

-- Crear la tabla Venta
CREATE TABLE Venta (
    VentaID INT AUTO_INCREMENT PRIMARY KEY,
    FechaVenta DATE,
    ClienteID INT,
    TotalVenta DECIMAL(10, 2),
    MetodoPago VARCHAR(200),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

-- Crear la tabla DetalleVenta
CREATE TABLE DetalleVenta (
    DetalleVentaID INT AUTO_INCREMENT PRIMARY KEY,
    VentaID INT,
    ProductoID INT,
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    Descuento DECIMAL(5, 2),
    TotalLinea DECIMAL(10, 2),
    FOREIGN KEY (VentaID) REFERENCES Venta(VentaID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);
