"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TipoUsuario_1 = require("../controlador/TipoUsuario/TipoUsuario");
const Validate_Token_1 = __importDefault(require("./Validate-Token"));
const router = (0, express_1.Router)();
//Usuarios
router.get('/usuarios', Validate_Token_1.default, TipoUsuario_1.getUsuarios);
router.get('/usuarios/:id', TipoUsuario_1.getUsuario);
router.delete('/usuarios/:id', TipoUsuario_1.DeleteUsuario);
router.post('/usuarios', TipoUsuario_1.PostUsuario);
router.put('/usuarios/:id', TipoUsuario_1.UpdateUsuario);
exports.default = router;
