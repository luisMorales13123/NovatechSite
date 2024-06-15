// Importación de los módulos necesarios
import { DataTypes } from 'sequelize'; // Tipos de datos para Sequelize
import db from '../../db/conexion'; // Conexión a la base de datos Sequelize

// Definición del modelo TipoUsuario  
const TipoUsuario = db.define('vistausuaruio', {
    Nombre: {
        type: DataTypes.STRING // Campo Nombre de tipo String en la base de datos
    },
    telefono: {
        type: DataTypes.STRING // Campo telefono de tipo String en la base de datos
    },
    descripcion: {
        type: DataTypes.STRING // Campo descripcion de tipo String en la base de datos
    },
    Nomtecnicobre: {
        type: DataTypes.NUMBER // Campo Nomtecnicobre de tipo String en la base de datos
    },
}, {
    tableName: 'vistausuaruio', // Especifica el nombre de la tabla en la base de datos
    createdAt: false, // Desactiva el campo createdAt
    updatedAt: false // Desactiva el campo updatedAt
});

// Exportación del modelo TipoUsuario
export default TipoUsuario;
