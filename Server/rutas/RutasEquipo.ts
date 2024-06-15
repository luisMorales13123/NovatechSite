import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/Equipo/Equipo';


const router = Router();

router.get('/equipo' , gets);
router.get('/equipo/:id' , get);
router.delete('/equipo/:id', Delete);
router.post('/equipo/',Post);
router.put('/equipo/:id',Update);



export default router;