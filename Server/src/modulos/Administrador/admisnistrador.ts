import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const Administrador= db.define('administrador', {
    Persona_idPersona: {
        type: DataTypes.NUMBER
    },
    
    
}, {
    tableName: 'administrador', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});

export default Administrador;