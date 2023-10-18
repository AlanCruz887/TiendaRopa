import express from 'express';
const router = express.Router();
import * as detalleVentaController from '../controllers/detVenta.controller.js';

// Rutas para la entidad de detalles de venta
router.post('/addDetalleVenta', detalleVentaController.createDetalleVenta);

// Obtener todos los detalles de venta
router.get('/getDetallesVenta', detalleVentaController.getAllDetallesVenta);

// Obtener un detalle de venta por ID
router.get('/getDetalleVenta/:id', detalleVentaController.getDetalleVentaById);

// Actualizar un detalle de venta por ID
router.put('/updateDetalleVenta/:id', detalleVentaController.updateDetalleVenta);

// Eliminar un detalle de venta por ID
router.delete('/deleteDetalleVenta/:id', detalleVentaController.deleteDetalleVenta);

export default router;
