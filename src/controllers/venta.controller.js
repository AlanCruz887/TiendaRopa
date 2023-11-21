import {db} from "../db/conexion.js"

// Crear una venta
export async function createVenta(req, res) {
  const { FechaVenta, ClienteID, TotalVenta, MetodoPago } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO Venta (FechaVenta, ClienteID, TotalVenta, MetodoPago) VALUES (?, ?, ?, ?)',
      [FechaVenta, ClienteID, TotalVenta, MetodoPago]
    );
    res.status(201).json({ message: 'Venta creada con éxito', ventaID: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la venta' });
  }
}

// Obtener todas las ventas
export async function getAllVentas(req, res) {
  try {
    const [results] = await db.query('SELECT * FROM Venta');
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
}

// Obtener una venta por ID
export async function getVentaById(req, res) {
  const ventaID = req.params.id;
  try {
    const [results] = await db.query('SELECT * FROM Venta WHERE VentaID = ?', [ventaID]);
    if (results.length === 0) {
      res.status(404).json({ message: 'Venta no encontrada' });
    } else {
      res.status(200).json(results[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la venta' });
  }
}

// Actualizar una venta por ID
export async function updateVenta(req, res) {
  const ventaID = req.params.id;
  const { FechaVenta, ClienteID, TotalVenta, MetodoPago } = req.body;
  try {
    const [result] = await db.execute(
      'UPDATE Venta SET FechaVenta = ?, ClienteID = ?, TotalVenta = ?, MetodoPago = ? WHERE VentaID = ?',
      [FechaVenta, ClienteID, TotalVenta, MetodoPago, ventaID]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Venta no encontrada' });
    } else {
      res.status(200).json({ message: 'Venta actualizada con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la venta' });
  }
}

// Eliminar una venta por ID
export async function deleteVenta(req, res) {
  const ventaID = req.params.id;

  try {
    // Consultar si existen detalles de venta relacionados con la venta a eliminar
    const [result] = await db.execute('SELECT COUNT(*) AS count FROM DetalleVenta WHERE VentaID = ?', [ventaID]);
    const rowCount = result[0].count;

    if (rowCount > 0) {
      res.status(400).json({ message: 'Primero debe eliminar los detalles de venta asociados a esta venta.' });
    } else {
      // No hay detalles de venta asociados, proceder con la eliminación de la venta
      const [deleteResult] = await db.execute('DELETE FROM Venta WHERE VentaID = ?', [ventaID]);
      if (deleteResult.affectedRows === 0) {
        res.status(404).json({ message: 'Venta no encontrada' });
      } else {
        res.status(200).json({ message: 'Venta eliminada con éxito' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la venta' });
  }
}

