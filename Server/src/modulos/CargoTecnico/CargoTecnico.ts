import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const CargoTecnico= db.define('cargostecnico', {
    CargosTecnico: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'cargostecnico', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});

export default CargoTecnico;