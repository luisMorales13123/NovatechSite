import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const tipoequipo = db.define('tipoequipo', {
    TipoEquipo: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'tipoequipo', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});




export default  
 tipoequipo;