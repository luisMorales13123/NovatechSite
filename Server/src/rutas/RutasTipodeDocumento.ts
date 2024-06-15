import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/TipodeDocumento/TipodeDocumento';


const router = Router();

router.get('/Documento' , gets);
router.get('/Documento/:id' , get);
router.delete('/Documento/:id', Delete);
router.post('/Documento/',Post);
router.put('/Documento/:id',Update);



export default router;