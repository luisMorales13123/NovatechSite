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
const Marcas_1 = __importDefault(require("../../modulos/Marcas/Marcas"));
// Controlador para obtener todos las marcas
const gets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMarcas = yield Marcas_1.default.findAll();
    res.json(listMarcas);
});
exports.gets = gets;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const marca = yield Marcas_1.default.findByPk(id);
    if (marca) {
        res.json(marca);
    }
    else {
        res.status(404).json({
            msg: `La marca con el id ${id}`
        });
    }
});
exports.get = get;
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const marca = yield Marcas_1.default.findByPk(id);
    if (!marca) {
        res.status(404).json({
            msg: `No existe la marca con el id ${id}`
        });
    }
    else {
        yield marca.destroy();
        res.json({
            msg: 'La marca se agrego'
        });
    }
});
exports.Delete = Delete;
const Post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Marcas_1.default.create(body);
        res.json({
            msg: `La marca se agregó`
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
        const marca = yield Marcas_1.default.findByPk(id);
        if (marca) {
            yield marca.update(body);
            res.json({
                msg: 'La marca fue actualizada'
            });
        }
        else {
            res.status(404).json({
                msg: `La marca con el id ${id}`
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
