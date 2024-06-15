"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('proyectotecknicstore', 'teckstore', 'Nova123$', {
    host: 'basedatosproyecto.mysql.database.azure.com',
    dialect: 'mysql'
});
exports.default = sequelize;
