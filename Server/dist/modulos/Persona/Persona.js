"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../../db/conexion"));
const persona = conexion_1.default.define('persona', {
    pNombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    sNombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    pApellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    sApellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    Telefono: {
        type: sequelize_1.DataTypes.STRING,
    },
    Documento: {
        type: sequelize_1.DataTypes.STRING,
    },
    FechaNacimiento: {
        type: sequelize_1.DataTypes.DATE,
    },
    TelefonoAux: {
        type: sequelize_1.DataTypes.STRING,
    },
    TipoDocumento: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    tableName: 'persona', // Especifica el nombre de la tabla en la base de datos
    createdAt: false,
    updatedAt: false
});
exports.default = persona;
