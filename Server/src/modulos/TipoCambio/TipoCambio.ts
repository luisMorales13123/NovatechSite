import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const TipoCambio= db.define('tipocambio', {
    TipoCambio: {
        type: DataTypes.STRING
    },
    
    
}, {
    tableName: 'tipocambio', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});

export default TipoCambio;