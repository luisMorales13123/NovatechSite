import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const Servicio = db.define('Servicio', {
    descDano: {
        type: DataTypes.STRING
    },
    ServicioTerminado: {
        type: DataTypes.STRING
    },
    idEquipoaReparar: {
        type: DataTypes.NUMBER
    },
    IdTecnicoEncargado: {
        type: DataTypes.NUMBER
    },
    idDuenoServicio: {
        type: DataTypes.NUMBER
    },
    TipoServicio_idTipoServicio: {
        type: DataTypes.NUMBER
    }
}, {
    tableName: 'Servicio', 
    createdAt: false,
    updatedAt: false
});

export default Servicio;