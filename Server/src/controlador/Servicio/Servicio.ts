import { Application, Request, Response } from 'express'; 
import Servicio from '../../modulos/Servicio/Servicio';

// Controlador para obtener todos las marcas
export const gets = async (req: Request, res: Response) => {
    const listServicio = await Servicio.findAll(); 

    res.json(listServicio); 
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params; 
    const servicio = await Servicio.findByPk(id); 

    if (servicio) {
        res.json(servicio);
    } else {
        res.status(404).json({
            msg: `el servicio con el id ${id}`
        });
    }
}

export const Delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const servicio = await Servicio.findByPk(id);

    if (!servicio) {
        res.status(404).json({
            msg: `No existe el servicio con el id ${id}`
        });
    } else {
        await servicio.destroy(); 
        res.json({
            msg: 'El servicio se agrego'
        });
    }
}


export const Post = async (req: Request, res: Response) => {
    const { body } = req; 

    try {
        await Servicio.create(body); 

        res.json({
            msg: `El servicio se agregó`
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
        const servicio = await Servicio.findByPk(id); 

        if (servicio) {
            await servicio.update(body);
            res.json({
                msg: 'El servicio fue actualizado'
            });
        } else {
            res.status(404).json({
                msg: `El servicio el id ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `ocurrió un error`
        });
    }
}