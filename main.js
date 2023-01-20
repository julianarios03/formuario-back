import express from 'express';
import dataBase from './database/database.js';
import clientesRoute from './routes/ClientesRoute.js';
import cors from 'cors';

const app = express();
app.set('port', 3500);

app.use(cors())
app.use(express.json())

app.use('/clientes', clientesRoute)

try {
  await dataBase.authenticate()
  console.log(`Conexión exitosa a la base de datos`)
} catch (error) {
  console.log(`No se pudo conectar a la base de datos ${error}`)
}

app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
  console.log(`Ruta servidor http://localhost:3500`)
});