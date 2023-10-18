import express from 'express';
import clientesRoutes from './routes/cliente.routes.js';
import productosRoutes from './routes/producto.routes.js';
import ventasRoutes from './routes/venta.routes.js';
import detalleVentaRoutes from './routes/detVenta.routes.js';

const app = express();
const port = 3000; // Puedes ajustar el puerto según tus necesidades.

app.use(express.json());

// Asigna las rutas
app.use('/api/clientes', clientesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/detalles-venta', detalleVentaRoutes);

export default app;
