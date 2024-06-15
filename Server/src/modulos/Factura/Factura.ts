import { DataTypes } from 'sequelize';
import db from '../../db/conexion';

const factura = db.define('factura', {
   
       
    idServicio: {
        type: DataTypes.INTEGER,
    
    },
    idDuenoFactura: {
        type: DataTypes.STRING,
    
    },
    FechaFactura: {
        type: DataTypes.DATE,
      
    },

    CostoTotal: {
        type: DataTypes.STRING,
    
    },
    TiempoGarantia: {
        type: DataTypes.STRING,
    
    }
    
}, {
    tableName: 'factura', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});

export default  factura;