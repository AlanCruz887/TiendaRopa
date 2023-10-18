import {db} from "../db/conexion.js"

// Crear un detalle de venta
export async function createDetalleVenta(req, res) {
  const { VentaID, ProductoID, Cantidad, PrecioUnitario, Descuento, TotalLinea } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO DetalleVenta (VentaID, ProductoID, Cantidad, PrecioUnitario, Descuento, TotalLinea) VALUES (?, ?, ?, ?, ?, ?)',
      [VentaID, ProductoID, Cantidad, PrecioUnitario, Descuento, TotalLinea]
    );
    res.status(201).json({ message: 'Detalle de venta creado con éxito', detalleVentaID: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el detalle de venta' });
  }
}

// Obtener todos los detalles de venta
export async function getAllDetallesVenta(req, res) {
  try {
    const [results] = await db.query('SELECT * FROM DetalleVenta');
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los detalles de venta' });
  }
}

// Obtener un detalle de venta por ID
export async function getDetalleVentaById(req, res) {
  const detalleVentaID = req.params.id;
  try {
    const [results] = await db.query('SELECT * FROM DetalleVenta WHERE DetalleVentaID = ?', [detalleVentaID]);
    if (results.length === 0) {
      res.status(404).json({ message: 'Detalle de venta no encontrado' });
    } else {
      res.status(200).json(results[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el detalle de venta' });
  }
}

// Actualizar un detalle de venta por ID
export async function updateDetalleVenta(req, res) {
  const detalleVentaID = req.params.id;
  const { VentaID, ProductoID, Cantidad, PrecioUnitario, Descuento, TotalLinea } = req.body;
  try {
    const [result] = await db.execute(
      'UPDATE DetalleVenta SET VentaID = ?, ProductoID = ?, Cantidad = ?, PrecioUnitario = ?, Descuento = ?, TotalLinea = ? WHERE DetalleVentaID = ?',
      [VentaID, ProductoID, Cantidad, PrecioUnitario, Descuento, TotalLinea, detalleVentaID]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Detalle de venta no encontrado' });
    } else {
      res.status(200).json({ message: 'Detalle de venta actualizado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el detalle de venta' });
  }
}

// Eliminar un detalle de venta por ID
export async function deleteDetalleVenta(req, res) {
  const detalleVentaID = req.params.id;
  try {
    const [result] = await db.execute('DELETE FROM DetalleVenta WHERE DetalleVentaID = ?', [detalleVentaID]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Detalle de venta no encontrado' });
    } else {
      res.status(200).json({ message: 'Detalle de venta eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el detalle de venta' });
  }
}
