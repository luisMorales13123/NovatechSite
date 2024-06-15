"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = exports.Post = exports.Delete = exports.get = exports.gets = void 0;
const Servicio_1 = __importDefault(require("../../modulos/Servicio/Servicio"));
// Controlador para obtener todos las marcas
const gets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listServicio = yield Servicio_1.default.findAll();
    res.json(listServicio);
});
exports.gets = gets;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicio = yield Servicio_1.default.findByPk(id);
    if (servicio) {
        res.json(servicio);
    }
    else {
        res.status(404).json({
            msg: `el servicio con el id ${id}`
        });
    }
});
exports.get = get;
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicio = yield Servicio_1.default.findByPk(id);
    if (!servicio) {
        res.status(404).json({
            msg: `No existe el servicio con el id ${id}`
        });
    }
    else {
        yield servicio.destroy();
        res.json({
            msg: 'El servicio se agrego'
        });
    }
});
exports.Delete = Delete;
const Post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Servicio_1.default.create(body);
        res.json({
            msg: `El servicio se agregó`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrió un error`
        });
    }
});
exports.Post = Post;
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const servicio = yield Servicio_1.default.findByPk(id);
        if (servicio) {
            yield servicio.update(body);
            res.json({
                msg: 'El servicio fue actualizado'
            });
        }
        else {
            res.status(404).json({
                msg: `El servicio el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrió un error`
        });
    }
});
exports.Update = Update;
