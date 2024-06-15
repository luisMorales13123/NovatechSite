"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TipoEquipo_1 = require("../controlador/TipoEquipo/TipoEquipo");
const TipoUsuario_1 = require("../controlador/TipoUsuario/TipoUsuario");
const router = (0, express_1.Router)();
router.get('/equipos', TipoEquipo_1.gets);
router.get('/equipos:id', TipoEquipo_1.get);
router.delete('/equipos:id', TipoEquipo_1.Delete);
router.post('/equipos/', TipoEquipo_1.Post);
router.put('/equipos:id', TipoEquipo_1.Update);
//Usuarios
router.get('/usuarios', TipoUsuario_1.getUsuarios);
router.get('/usuarios:id', TipoUsuario_1.getUsuario);
router.delete('/usuarios:id', TipoUsuario_1.DeleteUsuario);
router.post('/usuarios', TipoUsuario_1.PostUsuario);
router.put('/usuarios:id', TipoUsuario_1.UpdateUsuario);
exports.default = router;
