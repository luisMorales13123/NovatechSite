import { Sequelize }  from 'sequelize';


const sequelize = new Sequelize('proyectotecknicstore', 'teckstore', 'Nova123$', {
    host: 'basedatosproyecto.mysql.database.azure.com',
    dialect: 'mysql'
  });


  export default sequelize