import {Application,Request,Response} from 'express';
import TipoEquipo from '../../modulos/TipoEquipo/TipoEquipo';

export const gets = async (req: Request, res: Response) => {
    const listProducts = await TipoEquipo.findAll()

    res.json(listProducts)
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await TipoEquipo.findByPk(id);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
}

export const Delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await TipoEquipo.findByPk(id);

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

export const Post = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await TipoEquipo.create(body);

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

export const Update = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const product = await TipoEquipo.findByPk(id);

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