import express from 'express';
const router = express.Router();
import * as productosController from '../controllers/producto.controller.js';

// Rutas para la entidad de productos
router.post('/addProducto', productosController.createProducto);

// Obtener todos los productos
router.get('/getProductos', productosController.getAllProductos);

// Obtener un producto por ID
router.get('/getProducto/:id', productosController.getProductoById);

// Actualizar un producto por ID
router.put('/updateProducto/:id', productosController.updateProducto);

// Eliminar un producto por ID
router.delete('/deleteProducto/:id', productosController.deleteProducto);

export default router;
