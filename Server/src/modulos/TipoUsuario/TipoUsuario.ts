// Importación de los módulos necesarios
import { DataTypes } from 'sequelize'; // Tipos de datos para Sequelize
import db from '../../db/conexion'; // Conexión a la base de datos Sequelize

// Definición del modelo TipoUsuario  
const TipoUsuario = db.define('tipousuarios', {
    TipoUsuario: {
        type: DataTypes.STRING // Campo TipoUsuario de tipo String en la base de datos
    }
}, {
    tableName: 'tipousuario', // Especifica el nombre de la tabla en la base de datos
    createdAt: false, // Desactiva el campo createdAt
    updatedAt: false // Desactiva el campo updatedAt
});

// Exportación del modelo TipoUsuario
export default TipoUsuario;
