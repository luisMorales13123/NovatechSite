import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/Marcas/Marcas';


const router = Router();

router.get('/Listar' , gets);
router.get('/Consultar/:id' , get);
router.delete('/Eliminar/:id', Delete);
router.post('/Agregar/', Post);
router.put('/Actualizar/:id', Update);



export default router;