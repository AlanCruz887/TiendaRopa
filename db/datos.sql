-- Inserta datos en la tabla "Clientes" primero
use TiendaRopa;
INSERT INTO Clientes (Nombre, Apellido, Email, Telefono)
VALUES
  ('Cliente1', 'Apellido1', 'cliente1@email.com', '123-456-7890'),
  ('Cliente2', 'Apellido2', 'cliente2@email.com', '234-567-8901');

-- Inserta datos en la tabla "Productos" a continuación
INSERT INTO Productos (Nombre, Descripcion, Marca, Categoria, Precio, Stock, FechaIngreso)
VALUES
  ('Producto1', 'Descripción1', 'Marca1', 'Categoría1', 19.99, 100, '2023-10-18'),
  ('Producto2', 'Descripción2', 'Marca2', 'Categoría2', 29.99, 50, '2023-10-18');

-- Luego, inserta datos en la tabla "Venta"
-- Asegúrate de que el ClienteID exista en la tabla "Clientes" antes de usarlo aquí
INSERT INTO Venta (FechaVenta, ClienteID, TotalVenta, MetodoPago)
VALUES
  ('2023-10-18', 1, 59.97, 'Tarjeta'),
  ('2023-10-19', 2, 39.98, 'Efectivo');

-- Finalmente, inserta datos en la tabla "DetalleVenta"
-- Asegúrate de que los VentaID y ProductoID existan en las tablas "Venta" y "Productos" antes de usarlos aquí
INSERT INTO DetalleVenta (VentaID, ProductoID, Cantidad, PrecioUnitario, Descuento, TotalLinea)
VALUES
  (1, 1, 2, 19.99, 0, 39.98),
  (2, 2, 1, 29.99, 0, 29.99);
