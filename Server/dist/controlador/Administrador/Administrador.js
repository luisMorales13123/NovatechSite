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
const admisnistrador_1 = __importDefault(require("../../modulos/Administrador/admisnistrador"));
const gets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield admisnistrador_1.default.findAll();
    res.json(listProducts);
});
exports.gets = gets;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield admisnistrador_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un equipo con el id ${id}`
        });
    }
});
exports.get = get;
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield admisnistrador_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No existe un equipo con el id ${id}`
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: 'El equipo fue eliminado con exito!'
        });
    }
});
exports.Delete = Delete;
const Post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield admisnistrador_1.default.create(body);
        res.json({
            msg: `El equipo fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.Post = Post;
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield admisnistrador_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: 'El equipo fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un equipo con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.Update = Update;
