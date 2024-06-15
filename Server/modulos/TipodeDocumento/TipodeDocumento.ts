import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const TipoDocumento= db.define('tipodedocumento', {
    TipoDocumento: {
        type: DataTypes.STRING
    },
    
    
}, {
    tableName: 'tipodedocumento', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});

export default TipoDocumento;