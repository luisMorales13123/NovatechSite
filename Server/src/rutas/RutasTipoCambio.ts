import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/TipoCambio/TipoCambio';


const router = Router();

router.get('/TipoCambio' , gets);
router.get('/TipoCambio/:id' , get);
router.delete('/TipoCambio/:id', Delete);
router.post('/TipoCambio/',Post);
router.put('/TipoCambio/:id',Update);



export default router;