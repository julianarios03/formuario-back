//*importamos la conexion a la base de datos

import dataBase from "../database/database.js";

//*importamos sequelize 
import { DataTypes } from "sequelize";

const clientesModel = dataBase.define('registro', {
    tipoDocumento:{
        type: DataTypes.STRING
    },
    documento:{
        type:DataTypes.INTEGER
    },
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    fechaNacimiento :{
        type:DataTypes.DATE
    },
    direccion:{
        type:DataTypes.STRING
    },
    ciudad:{
        type:DataTypes.STRING
    },
    departamento:{
        type:DataTypes.STRING
    },
    pais:{
        type:DataTypes.STRING
    },
    marca:{
        type:DataTypes.STRING
    }
    


})

export  default clientesModel;
