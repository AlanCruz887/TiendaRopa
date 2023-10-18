import {db} from "../db/conexion.js"

// Crear un producto
export async function createProducto(req, res) {
  const { Nombre, Descripcion, Marca, Categoria, Precio, Stock, FechaIngreso } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO Productos (Nombre, Descripcion, Marca, Categoria, Precio, Stock, FechaIngreso) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [Nombre, Descripcion, Marca, Categoria, Precio, Stock, FechaIngreso]
    );
    res.status(201).json({ message: 'Producto creado con éxito', productoID: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
}

// Obtener todos los productos
export async function getAllProductos(req, res) {
  try {
    const [results] = await db.query('SELECT * FROM Productos');
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
}

// Obtener un producto por ID
export async function getProductoById(req, res) {
  const productoID = req.params.id;
  try {
    const [results] = await db.query('SELECT * FROM Productos WHERE ProductoID = ?', [productoID]);
    if (results.length === 0) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json(results[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
}

// Actualizar un producto por ID
export async function updateProducto(req, res) {
  const productoID = req.params.id;
  const { Nombre, Descripcion, Marca, Categoria, Precio, Stock, FechaIngreso } = req.body;
  try {
    const [result] = await db.execute(
      'UPDATE Productos SET Nombre = ?, Descripcion = ?, Marca = ?, Categoria = ?, Precio = ?, Stock = ?, FechaIngreso = ? WHERE ProductoID = ?',
      [Nombre, Descripcion, Marca, Categoria, Precio, Stock, FechaIngreso, productoID]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json({ message: 'Producto actualizado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
}

// Eliminar un producto por ID
export async function deleteProducto(req, res) {
  const productoID = req.params.id;
  try {
    const [result] = await db.execute('DELETE FROM Productos WHERE ProductoID = ?', [productoID]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json({ message: 'Producto eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
}
