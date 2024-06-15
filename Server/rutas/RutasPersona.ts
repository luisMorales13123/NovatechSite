import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/Persona/Persona';


const router = Router();

router.get('/Persona' , gets);
router.get('/Persona/:id' , get);
router.delete('/Persona/:id', Delete);
router.post('/Persona/', Post);
router.put('/Persona/:id', Update);



export default router;