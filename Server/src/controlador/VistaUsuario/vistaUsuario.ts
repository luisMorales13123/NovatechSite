import { Request, Response } from 'express';
import vistaUsuario from '../../modulos/VistaUsuairio/vistaUsuario';



export const PostUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await vistaUsuario.create(body);

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

