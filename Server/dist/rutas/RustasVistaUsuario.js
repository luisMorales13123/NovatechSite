"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vistaUsuario_1 = require("../controlador/VistaUsuario/vistaUsuario");
const router = (0, express_1.Router)();
router.post('/AgregarVistaUsuario/', vistaUsuario_1.PostUsuario);
exports.default = router;
