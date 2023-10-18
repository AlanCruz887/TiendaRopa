import express from 'express';
const router = express.Router();
import * as ventasController from '../controllers/venta.controller.js';

// Rutas para la entidad de ventas
router.post('/addVenta', ventasController.createVenta);

// Obtener todas las ventas
router.get('/getVentas', ventasController.getAllVentas);

// Obtener una venta por ID
router.get('/getVenta/:id', ventasController.getVentaById);

// Actualizar una venta por ID
router.put('/updateVenta/:id', ventasController.updateVenta);

// Eliminar una venta por ID
router.delete('/deleteVenta/:id', ventasController.deleteVenta);

export default router;
