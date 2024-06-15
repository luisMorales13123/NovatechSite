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
const Factura_1 = __importDefault(require("../../modulos/Factura/Factura")); // Importación del modelo TipoDocumento
// Controlador para obtener todos los documentos
const gets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listFactura = yield Factura_1.default.findAll(); // Busca todos los documentos en la base de datos
    res.json(listFactura); // Envía la lista de documentos como respuesta
});
exports.gets = gets;
// Controlador para obtener un documento por su ID
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obtiene el ID del documento de los parámetros de la solicitud
    const servicio = yield Factura_1.default.findByPk(id); // Busca el documento por su ID
    // Si se encuentra el documento, lo envía como respuesta. De lo contrario, devuelve un mensaje de error.
    if (servicio) {
        res.json(servicio);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.get = get;
// Controlador para eliminar un documento por su ID
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obtiene el ID del documento de los parámetros de la solicitud
    const servicio = yield Factura_1.default.findByPk(id); // Busca el documento por su ID
    // Si no se encuentra el documento, devuelve un mensaje de error. De lo contrario, lo elimina y envía un mensaje de éxito.
    if (!servicio) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    else {
        yield servicio.destroy(); // Elimina el documento de la base de datos
        res.json({
            msg: 'El producto fue eliminado con éxito!'
        });
    }
});
exports.Delete = Delete;
// Controlador para agregar un nuevo documento
const Post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obtiene el cuerpo de la solicitud
    try {
        yield Factura_1.default.create(body); // Crea un nuevo documento con los datos del cuerpo de la solicitud
        res.json({
            msg: `El producto fue agregado con éxito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrió un error, comuníquese con soporte`
        });
    }
});
exports.Post = Post;
// Controlador para actualizar un documento por su ID
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obtiene el cuerpo de la solicitud
    const { id } = req.params; // Obtiene el ID del documento de los parámetros de la solicitud
    try {
        const product = yield Factura_1.default.findByPk(id); // Busca el documento por su ID
        if (product) {
            yield product.update(body); // Actualiza el documento con los datos del cuerpo de la solicitud
            res.json({
                msg: 'El producto fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrió un error, comuníquese con soporte`
        });
    }
});
exports.Update = Update;
