import express from 'express';
const router = express.Router();
import * as clientesController from '../controllers/cliente.controller.js';

// Rutas para la entidad de clientes
router.post('/addCliente', clientesController.createCliente);

// Obtener todos los clientes
router.get('/getClientes', clientesController.getAllClientes);

// Obtener un cliente por ID
router.get('/getCliente/:id', clientesController.getClienteById);

// Actualizar un cliente por ID
router.put('/updateCliente/:id', clientesController.updateCliente);

// Eliminar un cliente por ID
router.delete('/deleteCliente/:id', clientesController.deleteCliente);

export default router;
