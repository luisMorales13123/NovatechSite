// Importación de los módulos necesarios
import { Application, Request, Response } from 'express'; // Importación de los tipos de Express
import TipoCambio from '../../modulos/TipoCambio/TipoCambio'; // Importación del modelo TipoCambio

// Controlador para obtener todos los documentos
export const gets = async (req: Request, res: Response) => {
    const listProducts = await TipoCambio.findAll(); // Busca todos los documentos en la base de datos

    res.json(listProducts); // Envía la lista de documentos como respuesta
}

// Controlador para obtener un documento por su ID
export const get = async (req: Request, res: Response) => {
    const { id } = req.params; // Obtiene el ID del documento de los parámetros de la solicitud
    const product = await TipoCambio.findByPk(id); // Busca el documento por su ID

    // Si se encuentra el documento, lo envía como respuesta. De lo contrario, devuelve un mensaje de error.
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
}

// Controlador para eliminar un documento por su ID
export const Delete = async (req: Request, res: Response) => {
    const { id } = req.params; // Obtiene el ID del documento de los parámetros de la solicitud
    const product = await TipoCambio.findByPk(id); // Busca el documento por su ID

    // Si no se encuentra el documento, devuelve un mensaje de error. De lo contrario, lo elimina y envía un mensaje de éxito.
    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    } else {
        await product.destroy(); // Elimina el documento de la base de datos
        res.json({
            msg: 'El producto fue eliminado con éxito!'
        });
    }
}

// Controlador para agregar un nuevo documento
export const Post = async (req: Request, res: Response) => {
    const { body } = req; // Obtiene el cuerpo de la solicitud

    try {
        await TipoCambio.create(body); // Crea un nuevo documento con los datos del cuerpo de la solicitud

        res.json({
            msg: `El producto fue agregado con éxito!`
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrió un error, comuníquese con soporte`
        });
    }
}

// Controlador para actualizar un documento por su ID
export const Update = async (req: Request, res: Response) => {
    const { body } = req; // Obtiene el cuerpo de la solicitud
    const { id } = req.params; // Obtiene el ID del documento de los parámetros de la solicitud

    try {
        const product = await TipoCambio.findByPk(id); // Busca el documento por su ID

        if (product) {
            await product.update(body); // Actualiza el documento con los datos del cuerpo de la solicitud
            res.json({
                msg: 'El producto fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrió un error, comuníquese con soporte`
        });
    }
}
