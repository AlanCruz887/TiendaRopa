import app from './app.js';


const port = process.env.PORT || 3000; // Puerto configurado a través de una variable de entorno

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
