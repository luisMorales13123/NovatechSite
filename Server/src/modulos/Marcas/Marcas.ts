import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const Marcas = db.define('Marcas', {
    Marcas: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Marcas', 
    createdAt: false,
    updatedAt: false
});

export default Marcas;