INSERT INTO Clientes (Nombre, Apellido, Email, Telefono, Direccion, Ciudad, Provincia, CodigoPostal, FechaRegistro)
VALUES
    ('Cliente1', 'Apellido1', 'cliente1@email.com', '123-456-7891', 'Dirección1', 'Ciudad1', 'Provincia1', '12345', '2023-10-19'),
    ('Cliente2', 'Apellido2', 'cliente2@email.com', '123-456-7892', 'Dirección2', 'Ciudad2', 'Provincia2', '12346', '2023-10-19'),
    ('Cliente3', 'Apellido3', 'cliente3@email.com', '123-456-7893', 'Dirección3', 'Ciudad3', 'Provincia3', '12347', '2023-10-19'),
    ('Cliente4', 'Apellido4', 'cliente4@email.com', '123-456-7894', 'Dirección4', 'Ciudad4', 'Provincia4', '12348', '2023-10-19'),
    ('Cliente5', 'Apellido5', 'cliente5@email.com', '123-456-7895', 'Dirección5', 'Ciudad5', 'Provincia5', '12349', '2023-10-19'),
    ('Cliente6', 'Apellido6', 'cliente6@email.com', '123-456-7896', 'Dirección6', 'Ciudad6', 'Provincia6', '12350', '2023-10-19'),
    ('Cliente7', 'Apellido7', 'cliente7@email.com', '123-456-7897', 'Dirección7', 'Ciudad7', 'Provincia7', '12351', '2023-10-19'),
    ('Cliente8', 'Apellido8', 'cliente8@email.com', '123-456-7898', 'Dirección8', 'Ciudad8', 'Provincia8', '12352', '2023-10-19'),
    ('Cliente9', 'Apellido9', 'cliente9@email.com', '123-456-7899', 'Dirección9', 'Ciudad9', 'Provincia9', '12353', '2023-10-19'),
    ('Cliente10', 'Apellido10', 'cliente10@email.com', '123-456-7800', 'Dirección10', 'Ciudad10', 'Provincia10', '12354', '2023-10-19');

-- Agregar 10 registros a la tabla Productos
INSERT INTO Productos (Nombre, Descripcion, Marca, Categoria, Precio, Stock, FechaIngreso)
VALUES
    ('Producto1', 'Descripción del Producto 1', 'Marca1', 'Categoría1', 19.99, 100, '2023-10-19'),
    ('Producto2', 'Descripción del Producto 2', 'Marca2', 'Categoría2', 29.99, 150, '2023-10-19'),
    ('Producto3', 'Descripción del Producto 3', 'Marca3', 'Categoría1', 14.99, 80, '2023-10-19'),
    ('Producto4', 'Descripción del Producto 4', 'Marca1', 'Categoría3', 24.99, 120, '2023-10-19'),
    ('Producto5', 'Descripción del Producto 5', 'Marca4', 'Categoría2', 34.99, 90, '2023-10-19'),
    ('Producto6', 'Descripción del Producto 6', 'Marca2', 'Categoría3', 17.99, 70, '2023-10-19'),
    ('Producto7', 'Descripción del Producto 7', 'Marca3', 'Categoría1', 19.99, 110, '2023-10-19'),
    ('Producto8', 'Descripción del Producto 8', 'Marca4', 'Categoría2', 22.99, 140, '2023-10-19'),
    ('Producto9', 'Descripción del Producto 9', 'Marca1', 'Categoría3', 26.99, 60, '2023-10-19'),
    ('Producto10', 'Descripción del Producto 10', 'Marca2', 'Categoría1', 11.99, 95, '2023-10-19');

-- Agregar 10 registros a la tabla Venta
INSERT INTO Venta (FechaVenta, ClienteID, TotalVenta, MetodoPago)
VALUES
    ('2023-10-19', 1, 49.99, 'Tarjeta de Crédito'),
    ('2023-10-19', 2, 59.99, 'PayPal'),
    ('2023-10-19', 3, 34.99, 'Transferencia Bancaria'),
    ('2023-10-19', 4, 74.99, 'Tarjeta de Crédito'),
    ('2023-10-19', 5, 29.99, 'PayPal'),
    ('2023-10-19', 6, 94.99, 'Transferencia Bancaria'),
    ('2023-10-19', 7, 19.99, 'Tarjeta de Crédito'),
    ('2023-10-19', 8, 64.99, 'PayPal'),
    ('2023-10-19', 9, 54.99, 'Transferencia Bancaria'),
    ('2023-10-19', 10, 84.99, 'Tarjeta de Crédito');



-- Agregar 10 registros a la tabla DetalleVenta
INSERT INTO DetalleVenta (VentaID, ProductoID, Cantidad, PrecioUnitario, Descuento, TotalLinea)
VALUES
    (1, 1, 2, 19.99, 2.00, 37.98),
    (1, 2, 1, 29.99, 0.00, 29.99),
    (2, 3, 3, 14.99, 1.50, 43.47),
    (2, 4, 2, 24.99, 0.00, 49.98),
    (3, 5, 1, 34.99, 3.00, 31.99),
    (3, 6, 4, 17.99, 0.00, 71.96),
    (4, 7, 5, 19.99, 2.00, 89.95),
    (4, 8, 2, 22.99, 0.00, 45.98);
