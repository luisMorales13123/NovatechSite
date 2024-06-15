import { Request, Response } from 'express';
import TipoUsuario from '../../modulos/TipoUsuario/TipoUsuario';

export const getUsuarios = async (req: Request, res: Response) => {
    const listProducts = await TipoUsuario.findAll()

    res.json(listProducts)
}

export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await TipoUsuario.findByPk(id);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
}

export const DeleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await TipoUsuario.findByPk(id);

    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito!'
        })
    }

}

export const PostUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await TipoUsuario.create(body);

        res.json({
            msg: `El producto fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const UpdateUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const product = await TipoUsuario.findByPk(id);

    if(product) {
        await product.update(body);
        res.json({
            msg: 'El producto fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}