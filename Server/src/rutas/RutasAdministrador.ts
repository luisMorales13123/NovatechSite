import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/Administrador/Administrador';


const router = Router();

router.get('/Administrador' , gets);
router.get('/Administrador/:id' , get);
router.delete('/Administrador/:id', Delete);
router.post('/Administrador/',Post);
router.put('/Administrador/:id',Update);



export default router;