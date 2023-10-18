import {db} from "../db/conexion.js"

// Crear una conexión a la base de datos

// Crear un cliente
export async function createCliente(req, res) {
  const { Nombre, Apellido, Email, Telefono, Direccion, Ciudad, Provincia, CodigoPostal, FechaRegistro } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO Clientes (Nombre, Apellido, Email, Telefono, Direccion, Ciudad, Provincia, CodigoPostal, FechaRegistro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [Nombre, Apellido, Email, Telefono, Direccion, Ciudad, Provincia, CodigoPostal, FechaRegistro]
    );
    res.status(201).json({ message: 'Cliente creado con éxito', clienteID: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
}

// Obtener todos los clientes
export async function getAllClientes(req, res) {
  try {
    const [results] = await db.query('SELECT * FROM Clientes');
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
}

// Obtener un cliente por ID
export async function getClienteById(req, res) {
  const clienteID = req.params.id;
  try {
    const [results] = await db.query('SELECT * FROM Clientes WHERE ClienteID = ?', [clienteID]);
    if (results.length === 0) {
      res.status(404).json({ message: 'Cliente no encontrado' });
    } else {
      res.status(200).json(results[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
}

// Actualizar un cliente por ID
export async function updateCliente(req, res) {
  const clienteID = req.params.id;
  const { Nombre, Apellido, Email, Telefono, Direccion, Ciudad, Provincia, CodigoPostal, FechaRegistro } = req.body;
  try {
    const [result] = await db.execute(
      'UPDATE Clientes SET Nombre = ?, Apellido = ?, Email = ?, Telefono = ?, Direccion = ?, Ciudad = ?, Provincia = ?, CodigoPostal = ?, FechaRegistro = ? WHERE ClienteID = ?',
      [Nombre, Apellido, Email, Telefono, Direccion, Ciudad, Provincia, CodigoPostal, FechaRegistro, clienteID]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Cliente no encontrado' });
    } else {
      res.status(200).json({ message: 'Cliente actualizado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el cliente' });
  }
}

// Eliminar un cliente por ID
export async function deleteCliente(req, res) {
  const clienteID = req.params.id;
  try {
    const [result] = await db.execute('DELETE FROM Clientes WHERE ClienteID = ?', [clienteID]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Cliente no encontrado' });
    } else {
      res.status(200).json({ message: 'Cliente eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
}
