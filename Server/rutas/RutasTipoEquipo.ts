import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/TipoEquipo/TipoEquipo';


const router = Router();

router.get('/equipos' , gets);
router.get('/equipos/:id' , get);
router.delete('/equipos/:id', Delete);
router.post('/equipos/',Post);
router.put('/equipos/:id',Update);



export default router;