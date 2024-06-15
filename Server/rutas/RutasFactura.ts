import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/Factura/Factura';


const router = Router();

router.get('/Factura' , gets);
router.get('/Factura/:id' , get);
router.delete('/Factura/:id', Delete);
router.post('/Factura/', Post);
router.put('/Factura/:id', Update);



export default router;