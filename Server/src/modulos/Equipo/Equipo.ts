import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const equipo = db.define('equipo', {
    
    descInconveniente: {
        type: DataTypes.STRING
    },
    idMarca: {
        type: DataTypes.NUMBER
    },
    idTipoEquipo: {
        type: DataTypes.NUMBER
    },
    idUsuario: {
        type: DataTypes.NUMBER
    }

}, {
    tableName: 'equipo', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});




export default  
 equipo;