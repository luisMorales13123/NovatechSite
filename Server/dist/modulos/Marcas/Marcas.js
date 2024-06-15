"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../../db/conexion"));
const Marcas = conexion_1.default.define('Marcas', {
    Marcas: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'Marcas',
    createdAt: false,
    updatedAt: false
});
exports.default = Marcas;
