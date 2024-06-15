"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../../db/conexion"));
const equipo = conexion_1.default.define('equipo', {
    descInconveniente: {
        type: sequelize_1.DataTypes.STRING
    },
    idMarca: {
        type: sequelize_1.DataTypes.NUMBER
    },
    idTipoEquipo: {
        type: sequelize_1.DataTypes.NUMBER
    },
    idUsuario: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    tableName: 'equipo', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});
exports.default = equipo;
