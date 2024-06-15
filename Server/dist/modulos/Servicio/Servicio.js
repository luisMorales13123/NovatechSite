"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../../db/conexion"));
const Servicio = conexion_1.default.define('Servicio', {
    descDano: {
        type: sequelize_1.DataTypes.STRING
    },
    ServicioTerminado: {
        type: sequelize_1.DataTypes.STRING
    },
    idEquipoaReparar: {
        type: sequelize_1.DataTypes.NUMBER
    },
    IdTecnicoEncargado: {
        type: sequelize_1.DataTypes.NUMBER
    },
    idDuenoServicio: {
        type: sequelize_1.DataTypes.NUMBER
    },
    TipoServicio_idTipoServicio: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    tableName: 'Servicio',
    createdAt: false,
    updatedAt: false
});
exports.default = Servicio;
