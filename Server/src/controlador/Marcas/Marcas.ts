import { Application, Request, Response } from 'express'; 
import Marcas from '../../modulos/Marcas/Marcas'; 

// Controlador para obtener todos las marcas
export const gets = async (req: Request, res: Response) => {
    const listMarcas = await Marcas.findAll(); 

    res.json(listMarcas); 
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params; 
    const marca = await Marcas.findByPk(id); 

    if (marca) {
        res.json(marca);
    } else {
        res.status(404).json({
            msg: `La marca con el id ${id}`
        });
    }
}

export const Delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const marca = await Marcas.findByPk(id);

    if (!marca) {
        res.status(404).json({
            msg: `No existe la marca con el id ${id}`
        });
    } else {
        await marca.destroy(); 
        res.json({
            msg: 'La marca se agrego'
        });
    }
}


export const Post = async (req: Request, res: Response) => {
    const { body } = req; 

    try {
        await Marcas.create(body); 

        res.json({
            msg: `La marca se agregó`
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrió un error`
        });
    }
}

export const Update = async (req: Request, res: Response) => {
    const { body } = req; 
    const { id } = req.params; 

    try {
        const marca = await Marcas.findByPk(id); 

        if (marca) {
            await marca.update(body);
            res.json({
                msg: 'La marca fue actualizada'
            });
        } else {
            res.status(404).json({
                msg: `La marca con el id ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrió un error`
        });
    }
}