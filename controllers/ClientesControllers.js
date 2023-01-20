//*importamos el modelo

import clientesModel from "../models/ClientesModel.js";

//**Metodos para el CRUD**/

//*Mostrar todo los clientes

const mostrarClientes = async (req, res) => {
    try {
        const clientes = await clientesModel.findAll()
        res.json(clientes)
    } catch (error) {
        res.json({
            message: `La base de datos se encuentra vacia ${error}`
        })
    }
}

//*Mostrar un cliente
const mostrarCliente = async (req, res) => {
    try {
        const cliente = await clientesModel.findOne({
            where: { id: req.params.id }
        })
        res.json(cliente)
    } catch (error) {
        res.json({
            message: `No se encontro ningun cliente con este id ${error}`
        })
    }
}

//*Crear cliente

const crearCliente = async (req, res) => {
    try {
        await clientesModel.create(req.body)
        res.json({
            message: 'Cliente creado correctamente'
        })

    } catch (error) {
        res.json({
            message: `No se creo el cliente correctamente ${error}`
        })
    }
}
//*Editar cliente

const editCliente = async (req, res) => {
    try {
        await clientesModel.update(req.body,
            { where: { id: req.params.id } })
        res.json({
            message: 'Cliente editado correctamente'
        })
    } catch (error) {
        res.json({
            message: `No se puedo editar el cliente correctamente ${error}`
        })
    }
}


//*Eliminar cliente

const eliminarCliente = async (req, res) => {
    try {
        await clientesModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            message: 'Cliente eliminado correctamente'
        })
    }catch (error) {
        res.json({ message: `No se puedo eliminar el cliente correctamente ${error}`
    })
    }
}

export{
    mostrarClientes,
    mostrarCliente, 
    crearCliente,
    editCliente,
    eliminarCliente
}