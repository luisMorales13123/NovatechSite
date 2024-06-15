import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/tiposervicio/tiposervicio';


const router = Router();

router.get('/Tiposervio' , gets);
router.get('/Tiposervio/:id' , get);
router.delete('/Tiposervio/:id', Delete);
router.post('/Tiposervio/', Post);
router.put('/Tiposervio/:id', Update);



export default router;