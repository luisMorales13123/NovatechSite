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
const TipoEquipo_1 = __importDefault(require("../modulos/TipoEquipo"));
const gets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listarproducto = yield TipoEquipo_1.default.findAll();
    res.json(listarproducto);
});
exports.gets = gets;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Product = yield TipoEquipo_1.default.findByPk(id);
    if (Product) {
        res.json(Product);
    }
    else {
        res.status(404).json({
            msg: `no existe un producto con el id ${id}`
        });
    }
});
exports.get = get;
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Product = yield TipoEquipo_1.default.findByPk(id);
    if (!Product) {
        res.status(404).json({
            msg: `No existe un producto con el id${id}`
        });
    }
    else {
        yield Product.destroy();
        res.json({
            msg: 'el producto fue eliminado con exito!'
        });
    }
});
exports.Delete = Delete;
const Post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield TipoEquipo_1.default.create(body);
        res.json({
            msg: `el producto fue agregado con exito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ups ocurrio un error comuniquese con soporte`
        });
    }
});
exports.Post = Post;
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const Product = yield TipoEquipo_1.default.findByPk(id);
        if (Product) {
            yield Product.update(body);
            res.json({
                msg: `El producto fue actualizado con exito`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ups ocurrio un error comuniquese con soporte`
        });
    }
});
exports.Update = Update;
