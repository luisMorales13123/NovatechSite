import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const persona = db.define('persona', {
    pNombre: {
        type: DataTypes.STRING,
       
    },
    sNombre: {
        type: DataTypes.STRING,
       
    },
    pApellido: {
        type: DataTypes.STRING,
      
    },
    sApellido: {
        type: DataTypes.STRING,
       
    },
    Telefono: {
        type: DataTypes.STRING,
      
    },
    Documento: {
        type: DataTypes.STRING,
      
    },
    FechaNacimiento: {
        type: DataTypes.DATE,
       
    },
    TelefonoAux: {
        type: DataTypes.STRING,
       
    },
    TipoDocumento: {
        type: DataTypes.INTEGER,
    
    }

    
}, {
    tableName: 'persona', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});

export default  persona;