import { Sequelize } from "sequelize";


const dataBase = new Sequelize('formulario','root','',{
    host: "localhost",
    port: 3306,
    dialect: "mysql"
})
export default dataBase
