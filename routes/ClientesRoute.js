import express from "express";
import { mostrarClientes, mostrarCliente, crearCliente, editCliente, eliminarCliente } from "../controllers/clientesControllers.js";

const clientesRoute = express.Router()

clientesRoute.get('/', mostrarClientes)
clientesRoute.get('/:id', mostrarCliente)
clientesRoute.post('/', crearCliente)
clientesRoute.put('/:id', editCliente)
clientesRoute.delete('/:id', eliminarCliente)

export default clientesRoute;
